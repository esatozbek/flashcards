/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { useSelector } from '@xstate/react';
import { useAtom } from 'jotai';
import { Text } from 'components/Typography';
import formatSeconds from 'utils/formatSeconds';
import { serviceAtom } from 'atoms/serviceAtoms';
import { HEADER_CONTAINER_STYLE } from '../PracticeModal.styles';
import { TPracticeService } from 'machines/practiceMachine';

function PracticeModalHeader({ deckName }: { deckName: string }): ReactElement {
    const [{ practiceService }] = useAtom<{ practiceService?: TPracticeService }>(serviceAtom);

    const cardIdslength = useSelector(
        practiceService!,
        (state) => state.context.practiceCardIds.length
    );
    const selectedCardIdx = useSelector(practiceService!, (state) => state.context.selectedCardIdx);
    const timeElapsed = useSelector(practiceService!, (state) => state.context.timeElapsed);
    const isStarted = useSelector(practiceService!, (state) => state.matches('started'));

    return (
        <div sx={HEADER_CONTAINER_STYLE}>
            <Text fontSize={5}>{deckName}</Text>
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
