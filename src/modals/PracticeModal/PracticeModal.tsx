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
                    <div
                        sx={{
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                            p: 3,
                            backgroundColor: 'primary',
                            boxShadow: '4px 4px 2px 0px rgb(0 0 0 / 50%)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
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

                    <div
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <React.Fragment>
                            <div
                                sx={{
                                    display: 'relative',
                                    backgroundColor: 'secondary',
                                    boxShadow: '4px 4px 2px 0px rgb(0 0 0 / 50%)',
                                    p: 3,
                                }}
                            >
                                {current.value === 'starting' && (
                                    <Text fontSize={5}>{countdown}</Text>
                                )}

                                {current.value === 'started' && (
                                    <React.Fragment>
                                        <Card card={currentCard} />
                                        <div
                                            sx={{
                                                mt: 3,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <div sx={{ cursor: 'pointer' }}>
                                                <LeftArrowIcon height={32} width={32} />
                                            </div>
                                            <div
                                                sx={{ cursor: 'pointer' }}
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

                            <div
                                sx={{
                                    position: 'absolute',
                                    bottom: '-86px',
                                }}
                            >
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
                <div
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Text fontSize={3} fontFamily="heading">
                        Card Number
                    </Text>
                    <Input placeholder="All" value={''} onChange={() => {}} />
                </div>
                <div
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
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
