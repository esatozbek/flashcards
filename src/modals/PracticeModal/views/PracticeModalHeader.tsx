/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { Text } from 'components/Typography';
import { HEADER_CONTAINER_STYLE } from '../PracticeModal.styles';
import { PracticeModalHeaderPropTypes } from '../PracticeModal.types';
import formatSeconds from 'utils/formatSeconds';

function PracticeModalHeader({
    currentState,
    timeElapsed,
    selectedCardIdx,
    cardIdslength,
}: PracticeModalHeaderPropTypes): ReactElement {
    return (
        <div sx={HEADER_CONTAINER_STYLE}>
            <Text fontSize={5}>CS Deck</Text>
            {currentState === 'started' && (
                <div>
                    <div>
                        <Text fontSize={4}>Time elapsed: {formatSeconds(timeElapsed)}</Text>
                    </div>
                    <Text fontSize={4}>
                        Card no: {selectedCardIdx + 1}/{cardIdslength}
                    </Text>
                </div>
            )}
        </div>
    );
}

export default PracticeModalHeader;
