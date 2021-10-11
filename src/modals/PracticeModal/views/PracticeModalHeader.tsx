/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { Text } from 'components/Typography';
import { HEADER_CONTAINER_STYLE } from '../PracticeModal.styles';
import formatSeconds from 'utils/formatSeconds';
import { useSelector } from '@xstate/react';
import { serviceAtom } from 'atoms/serviceAtoms';
import { useAtom } from 'jotai';

function PracticeModalHeader(): ReactElement {
    const [{ practiceService }] = useAtom(serviceAtom);
    const cardIdslength = useSelector(practiceService, (state) => state.context.cardIds.length);
    const selectedCardIdx = useSelector(practiceService, (state) => state.context.selectedCardIdx);
    const timeElapsed = useSelector(practiceService, (state) => state.context.timeElapsed);
    const isStarted = useSelector(practiceService, (state) => state.matches('started'));

    return (
        <div sx={HEADER_CONTAINER_STYLE}>
            <Text fontSize={5}>CS Deck</Text>
            {isStarted && (
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
