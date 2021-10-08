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

const StartingContent = ({ countdown }: Partial<PracticeModalContentPropTypes>): ReactElement => (
    <Fragment>
        <div sx={CONTENT_INNER_CONTAINER_STYLE}>
            <Text fontSize={5}>{countdown}</Text>
        </div>
    </Fragment>
);

const StartedContent = ({
    currentCard,
    onNextCard,
    onPrevCard,
}: Partial<PracticeModalContentPropTypes>): ReactElement => {
    const cardRef = useRef<TCardRef>(null);

    const handleTurnCard = useCallback(() => {
        cardRef.current?.turnCard?.();
    }, [cardRef]);

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

const EndedContent = ({
    onEndPractice,
    timeElapsed = 0,
}: Partial<PracticeModalContentPropTypes>): ReactElement => (
    <Fragment>
        <div sx={CONTENT_INNER_CONTAINER_STYLE}>
            <Text fontSize={5}>Time elapsed: {formatSeconds(timeElapsed)}</Text>
        </div>

        <div sx={CONTENT_BOTTOM_STYLE}>
            <Button text="End Practice" onClick={onEndPractice} />
        </div>
    </Fragment>
);

function PracticeModalContent({
    currentState,
    countdown,
    currentCard,
    timeElapsed,
    onNextCard,
    onPrevCard,
    onEndPractice,
}: PracticeModalContentPropTypes): ReactElement {
    return (
        <div sx={CONTENT_CONTAINER_STYLE}>
            {
                {
                    starting: <StartingContent countdown={countdown} />,
                    started: (
                        <StartedContent
                            currentCard={currentCard}
                            onNextCard={onNextCard}
                            onPrevCard={onPrevCard}
                        />
                    ),
                    ended: <EndedContent timeElapsed={timeElapsed} onEndPractice={onEndPractice} />,
                }[currentState]
            }
        </div>
    );
}

export default PracticeModalContent;
