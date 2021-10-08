/** @jsxImportSource theme-ui */
import { Fragment, ReactElement, useState, useCallback } from 'react';
import Modal from 'components/Modal';
import { PracticeModalPropTypes } from './PracticeModal.types';
import { useMachine } from '@xstate/react';
import practiceMachine from 'machines/practiceMachine';
import { useAtom } from 'jotai';
import { decksAtom } from 'atoms/deckAtoms';
import { cardsAtom } from 'atoms/cardAtoms';
import PracticeForm from './views/PracticeForm';
import PracticeModalContent from './views/PracticeModalContent';
import PracticeModalHeader from './views/PracticeModalHeader';

function PracticeModal({ showModal, onCloseModal, deckId }: PracticeModalPropTypes): ReactElement {
    const [current, send] = useMachine(practiceMachine);
    const [started, setStarted] = useState<boolean>(false);
    const [decks] = useAtom(decksAtom);
    const [cards] = useAtom(cardsAtom);
    const { cardIds, selectedCardIdx, countdown, timeElapsed } = current.context;
    const currentCard = cards[cardIds[selectedCardIdx]];

    console.log(current);

    const handleStartPractice = useCallback(
        (isShuffle: boolean, cardNumber: number) => {
            setStarted(true);
            send('START', { cardIds: decks[deckId].cardIds });
        },
        [setStarted, send, decks, deckId]
    );

    const handleNextCard = useCallback(() => {
        send('NEXT_CARD');
    }, [send]);

    const handlePrevCard = useCallback(() => {
        send('PREV_CARD');
    }, [send]);

    const handleEndPractice = useCallback(() => {
        onCloseModal();
    }, [onCloseModal]);

    return (
        <Modal
            title="Practice"
            showModal={showModal}
            onCloseModal={onCloseModal}
            direction="right"
            absoluteContent={
                <Fragment>
                    <PracticeModalHeader
                        currentState={String(current.value)}
                        selectedCardIdx={selectedCardIdx}
                        cardIdslength={cardIds.length}
                        timeElapsed={timeElapsed}
                    />

                    <PracticeModalContent
                        currentState={current.value.toString()}
                        countdown={countdown}
                        currentCard={currentCard}
                        onNextCard={handleNextCard}
                        onPrevCard={handlePrevCard}
                        timeElapsed={timeElapsed}
                        onEndPractice={handleEndPractice}
                    />
                </Fragment>
            }
            modalBodyVisible={!started}
        >
            <PracticeForm onStartPractice={handleStartPractice} />
        </Modal>
    );
}

export default PracticeModal;
