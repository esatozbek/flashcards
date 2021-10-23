/** @jsxImportSource theme-ui */
import { Fragment, ReactElement, useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import Modal from 'components/Modal';
import { appendPracticeStatisticsAtom } from 'atoms/statisticAtoms';
import shuffleArray from 'utils/shuffleArray';
import PracticeForm from './views/PracticeForm';
import PracticeModalContent from './views/PracticeModalContent';
import PracticeModalHeader from './views/PracticeModalHeader';
import { PracticeModalPropTypes } from './PracticeModal.types';
import { usePracticeModel, usePracticeService } from './PracticeModal.hooks';

function PracticeModal({ showModal, onCloseModal, deckId }: PracticeModalPropTypes): ReactElement {
    const { practiceService } = usePracticeService();
    const [, appendPracticeStatistics] = useAtom(appendPracticeStatisticsAtom);

    const { selectedDeck, practiceCardIds, turnBackCardIdxs, value, started } = usePracticeModel(
        practiceService,
        deckId
    );

    useEffect(() => {
        if (showModal) {
            practiceService.start();
        } else {
            practiceService.stop();
        }

        return () => {
            practiceService.stop();
        };
    }, [showModal, practiceService]);

    const handleStartPractice = useCallback(
        (isShuffle: boolean, cardNumber: number) => {
            let cardIds = [...selectedDeck.cardIds];
            if (isShuffle) cardIds = shuffleArray(cardIds);
            cardIds = cardIds.slice(0, cardNumber);
            practiceService.send('START', { practiceCardIds: cardIds });
        },
        [practiceService, selectedDeck]
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
                practicedCardCount: practiceCardIds.length,
                deckId,
                turnBackCount: turnBackCardIdxs.size,
            });
            onCloseModal();
        },
        [onCloseModal, appendPracticeStatistics, practiceCardIds, deckId, turnBackCardIdxs]
    );

    return (
        <Modal
            title="Practice"
            showModal={showModal}
            onCloseModal={onCloseModal}
            direction="right"
            absoluteContent={
                <Fragment>
                    <PracticeModalHeader deckName={selectedDeck.deckName} />

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
            <PracticeForm
                onStartPractice={handleStartPractice}
                defaultCardNumber={selectedDeck.cardIds.length}
            />
        </Modal>
    );
}

export default PracticeModal;
