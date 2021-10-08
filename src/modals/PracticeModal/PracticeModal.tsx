/** @jsxImportSource theme-ui */
import React, { Fragment, ReactElement, useState, useCallback } from 'react';
import Modal from 'components/Modal';
import { Text } from 'components/Typography';
import Input from 'components/Input';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Card from 'components/Card';
import { LeftArrowIcon, RightArrowIcon } from 'assets/svg';
import { PracticeModalPropTypes } from './PracticeModal.types';
import { useMachine } from '@xstate/react';
import practiceMachine from 'machines/practiceMachine';
import { useAtom } from 'jotai';
import { decksAtom } from 'atoms/deckAtoms';
import { cardsAtom } from 'atoms/cardAtoms';
import formatSeconds from 'utils/formatSeconds';
import {
    HEADER_CONTAINER_STYLE,
    MODAL_ROW_STYLE,
    CONTENT_CONTAINER_STYLE,
    CONTENT_BOTTOM_STYLE,
    ARROW_CONTAINER_STYLE,
    CONTENT_INNER_BOTTOM_STYLE,
    CONTENT_INNER_CONTAINER_STYLE,
} from './PracticeModal.styles';

function PracticeModal({ showModal, onCloseModal, deckId }: PracticeModalPropTypes): ReactElement {
    const [current, send] = useMachine(practiceMachine);
    const [isShuffle, setShuffle] = useState<boolean>(false);
    const [started, setStarted] = useState<boolean>(false);
    const [decks] = useAtom(decksAtom);
    const [cards] = useAtom(cardsAtom);
    const { cardIds, selectedCardIdx, countdown, timeElapsed } = current.context;
    const currentCard = cards[cardIds[selectedCardIdx]];

    console.log(current);

    const handleShuffleChanged = useCallback(
        (e: boolean) => {
            setShuffle(e);
        },
        [setShuffle]
    );

    const handleStartPractice = useCallback(() => {
        setStarted(true);
        send('START', { cardIds: decks[deckId].cardIds });
    }, [setStarted, send, decks, deckId]);

    const handleNextCard = useCallback(() => {
        send('NEXT_CARD');
    }, [send]);

    return (
        <Modal
            title="Practice"
            showModal={showModal}
            onCloseModal={onCloseModal}
            direction="right"
            absoluteContent={
                <Fragment>
                    <div sx={HEADER_CONTAINER_STYLE}>
                        <Text fontSize={5}>CS Deck</Text>
                        {current.value === 'started' && (
                            <div>
                                <div>
                                    <Text fontSize={4}>
                                        Time elapsed: {formatSeconds(timeElapsed)}
                                    </Text>
                                </div>
                                <Text fontSize={4}>
                                    Card no: {selectedCardIdx + 1}/{cardIds.length}
                                </Text>
                            </div>
                        )}
                    </div>

                    <div sx={CONTENT_CONTAINER_STYLE}>
                        <React.Fragment>
                            <div sx={CONTENT_INNER_CONTAINER_STYLE}>
                                {current.value === 'starting' && (
                                    <Text fontSize={5}>{countdown}</Text>
                                )}

                                {current.value === 'started' && (
                                    <React.Fragment>
                                        <Card card={currentCard} />
                                        <div sx={CONTENT_INNER_BOTTOM_STYLE}>
                                            <div sx={ARROW_CONTAINER_STYLE}>
                                                <LeftArrowIcon height={32} width={32} />
                                            </div>
                                            <div
                                                sx={ARROW_CONTAINER_STYLE}
                                                onClick={handleNextCard}
                                            >
                                                <RightArrowIcon height={32} width={32} />
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )}
                                {current.value === 'ended' && (
                                    <Text fontSize={5}>
                                        Time elapsed: {formatSeconds(timeElapsed)}
                                    </Text>
                                )}
                            </div>

                            <div sx={CONTENT_BOTTOM_STYLE}>
                                {current.value === 'started' && <Button text="Show Back" />}
                                {current.value === 'ended' && <Button text="End Practice" />}
                            </div>
                        </React.Fragment>
                    </div>
                </Fragment>
            }
            modalBodyVisible={!started}
        >
            <div>
                <div sx={MODAL_ROW_STYLE}>
                    <Text fontSize={3} fontFamily="heading">
                        Card Number
                    </Text>
                    <Input placeholder="All" value={''} onChange={() => {}} />
                </div>
                <div
                    sx={{
                        ...MODAL_ROW_STYLE,
                        my: 3,
                    }}
                >
                    <Text fontSize={3} fontFamily="heading">
                        Shuffle
                    </Text>
                    <CheckBox checked={isShuffle} onChange={handleShuffleChanged} />
                </div>
                <div sx={{ mt: 3 }}>
                    <Button text="Start Practice" onClick={handleStartPractice} />
                </div>
            </div>
        </Modal>
    );
}

export default PracticeModal;
