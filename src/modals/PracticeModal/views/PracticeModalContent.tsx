/** @jsxImportSource theme-ui */
import { ReactElement, Fragment, useCallback, useRef } from 'react';
import { Text } from 'components/Typography';
import Card from 'components/Card';
import { LeftArrowIcon, RightArrowIcon } from 'assets/svg';
import Button from 'components/Button';
import {
    CONTENT_CONTAINER_STYLE,
    CONTENT_INNER_CONTAINER_STYLE,
    CONTENT_INNER_BOTTOM_STYLE,
    ARROW_CONTAINER_STYLE,
    CONTENT_BOTTOM_STYLE,
} from '../PracticeModal.styles';
import { PracticeModalContentPropTypes } from '../PracticeModal.types';
import formatSeconds from 'utils/formatSeconds';
import { TCardRef } from 'components/Card/Card.types';
import { useAtom } from 'jotai';
import { serviceAtom } from 'atoms/serviceAtoms';
import { useSelector } from '@xstate/react';
import { cardsAtom } from 'atoms/cardAtoms';

const StartingContent = (): ReactElement => {
    const [{ practiceService }] = useAtom(serviceAtom);
    const countdown = useSelector(practiceService, (state) => state.context.countdown);

    return (
        <Fragment>
            <div sx={CONTENT_INNER_CONTAINER_STYLE}>
                <Text fontSize={5}>{countdown}</Text>
            </div>
        </Fragment>
    );
};

const StartedContent = ({
    onNextCard,
    onPrevCard,
}: Partial<PracticeModalContentPropTypes>): ReactElement => {
    const cardRef = useRef<TCardRef>(null);
    const [{ practiceService }] = useAtom(serviceAtom);
    const selectedCardIdx = useSelector(practiceService, (state) => state.context.selectedCardIdx);
    const cardIds = useSelector(practiceService, (state) => state.context.cardIds);
    const [cards] = useAtom(cardsAtom);
    const currentCard = cards[cardIds[selectedCardIdx]];

    const handleTurnCard = useCallback(() => {
        practiceService.send('TURN_BACK', { cardIdx: selectedCardIdx });
        cardRef.current?.turnCard?.();
    }, [cardRef, practiceService, selectedCardIdx]);

    return (
        <Fragment>
            <div sx={CONTENT_INNER_CONTAINER_STYLE}>
                <Card ref={cardRef} card={currentCard} autoTurn={false} />
                <div sx={CONTENT_INNER_BOTTOM_STYLE}>
                    <div sx={ARROW_CONTAINER_STYLE} onClick={onPrevCard}>
                        <LeftArrowIcon height={32} width={32} />
                    </div>
                    <div sx={ARROW_CONTAINER_STYLE} onClick={onNextCard}>
                        <RightArrowIcon height={32} width={32} />
                    </div>
                </div>
            </div>

            <div sx={CONTENT_BOTTOM_STYLE}>
                <Button text="Show Back" onClick={handleTurnCard} />
            </div>
        </Fragment>
    );
};

const EndedContent = ({ onEndPractice }: Partial<PracticeModalContentPropTypes>): ReactElement => {
    const [{ practiceService }] = useAtom(serviceAtom);
    const timeElapsed = useSelector(practiceService, (state) => state.context.timeElapsed) || 0;

    return (
        <Fragment>
            <div sx={CONTENT_INNER_CONTAINER_STYLE}>
                <Text fontSize={5}>Time elapsed: {formatSeconds(timeElapsed)}</Text>
            </div>

            <div sx={CONTENT_BOTTOM_STYLE}>
                <Button text="End Practice" onClick={() => onEndPractice?.(timeElapsed)} />
            </div>
        </Fragment>
    );
};

function PracticeModalContent({
    currentState,
    onNextCard,
    onPrevCard,
    onEndPractice,
}: PracticeModalContentPropTypes): ReactElement {
    return (
        <div sx={CONTENT_CONTAINER_STYLE}>
            {
                {
                    starting: <StartingContent />,
                    started: <StartedContent onNextCard={onNextCard} onPrevCard={onPrevCard} />,
                    ended: <EndedContent onEndPractice={onEndPractice} />,
                }[currentState]
            }
        </div>
    );
}

export default PracticeModalContent;
