/** @jsxImportSource theme-ui */
import { ReactElement, Fragment } from 'react';
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

const StartingContent = ({ countdown }: Partial<PracticeModalContentPropTypes>): ReactElement => (
    <Fragment>
        <div sx={CONTENT_INNER_CONTAINER_STYLE}>
            <Text fontSize={5}>{countdown}</Text>
        </div>
    </Fragment>
);

const StartedContent = ({
    currentCard,
    handleNextCard,
}: Partial<PracticeModalContentPropTypes>): ReactElement => (
    <Fragment>
        <div sx={CONTENT_INNER_CONTAINER_STYLE}>
            <Card card={currentCard} />
            <div sx={CONTENT_INNER_BOTTOM_STYLE}>
                <div sx={ARROW_CONTAINER_STYLE}>
                    <LeftArrowIcon height={32} width={32} />
                </div>
                <div sx={ARROW_CONTAINER_STYLE} onClick={handleNextCard}>
                    <RightArrowIcon height={32} width={32} />
                </div>
            </div>
        </div>

        <div sx={CONTENT_BOTTOM_STYLE}>
            <Button text="Show Back" />
        </div>
    </Fragment>
);

const EndedContent = ({
    timeElapsed = 0,
}: Partial<PracticeModalContentPropTypes>): ReactElement => (
    <Fragment>
        <div sx={CONTENT_INNER_CONTAINER_STYLE}>
            <Text fontSize={5}>Time elapsed: {formatSeconds(timeElapsed)}</Text>
        </div>

        <div sx={CONTENT_BOTTOM_STYLE}>
            <Button text="End Practice" />
        </div>
    </Fragment>
);

function PracticeModalContent({
    currentState,
    countdown,
    currentCard,
    handleNextCard,
    timeElapsed,
}: PracticeModalContentPropTypes): ReactElement {
    return (
        <div sx={CONTENT_CONTAINER_STYLE}>
            {
                {
                    starting: <StartingContent countdown={countdown} />,
                    started: (
                        <StartedContent currentCard={currentCard} handleNextCard={handleNextCard} />
                    ),
                    ended: <EndedContent timeElapsed={timeElapsed} />,
                }[currentState]
            }
        </div>
    );
}

export default PracticeModalContent;
