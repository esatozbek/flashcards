/** @jsxImportSource theme-ui */
import { Fragment, ReactElement, useState, useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useInterpret, useSelector } from '@xstate/react';
import Modal from 'components/Modal';
import practiceMachine from 'machines/practiceMachine';
import { setServiceAtom } from 'atoms/serviceAtoms';
import { decksAtom } from 'atoms/deckAtoms';
import { appendPracticeStatisticsAtom } from 'atoms/statisticAtoms';
import PracticeForm from './views/PracticeForm';
import PracticeModalContent from './views/PracticeModalContent';
import PracticeModalHeader from './views/PracticeModalHeader';
import { PracticeModalPropTypes } from './PracticeModal.types';

function PracticeModal({ showModal, onCloseModal, deckId }: PracticeModalPropTypes): ReactElement {
    const practiceService = useInterpret(practiceMachine);
    const [started, setStarted] = useState<boolean>(false);
    const [decks] = useAtom(decksAtom);
    const [, appendPracticeStatistics] = useAtom(appendPracticeStatisticsAtom);
    const [, setService] = useAtom(setServiceAtom);

    const cardIds = useSelector(practiceService, (state) => state.context.cardIds);
    const turnBackCardIdxs = useSelector(
        practiceService,
        (state) => state.context.turnBackCardIdxs
    );
    const value = useSelector(practiceService, (state) => state.value);

    useEffect(() => {
        setService({ serviceKey: 'practiceService', service: practiceService });
    }, [practiceService, setService]);

    const handleStartPractice = useCallback(
        (isShuffle: boolean, cardNumber: number) => {
            setStarted(true);
            practiceService.send('START', { cardIds: decks[deckId].cardIds });
        },
        [setStarted, practiceService, decks, deckId]
    );

    const handleNextCard = useCallback(() => {
        practiceService.send('NEXT_CARD');
    }, [practiceService]);

    const handlePrevCard = useCallback(() => {
        practiceService.send('PREV_CARD');
    }, [practiceService]);

    const handleEndPractice = useCallback(
        (timeElapsed: number) => {
            appendPracticeStatistics({
                timeSpent: timeElapsed,
                practicedCardCount: cardIds.length,
                deckId,
                turnBackCount: turnBackCardIdxs.size,
            });
            onCloseModal();
        },
        [onCloseModal, appendPracticeStatistics, cardIds, deckId, turnBackCardIdxs]
    );

    return (
        <Modal
            title="Practice"
            showModal={showModal}
            onCloseModal={onCloseModal}
            direction="right"
            absoluteContent={
                <Fragment>
                    <PracticeModalHeader deckName={decks[deckId].deckName} />

                    <PracticeModalContent
                        currentState={value.toString()}
                        onNextCard={handleNextCard}
                        onPrevCard={handlePrevCard}
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
