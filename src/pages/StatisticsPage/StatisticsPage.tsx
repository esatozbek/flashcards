/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { useAtom } from 'jotai';
import { Box } from 'theme-ui';
import { Text } from 'components/Typography';
import Deck from 'components/Deck';
import { decksAtom } from 'atoms/deckAtoms';
import { statisticAtom } from 'atoms/statisticAtoms';
import DefaultLayout from 'layouts/DefaultLayout';
import formatSeconds from 'utils/formatSeconds';
import {
    CONTAINER_STYLE,
    TITLE_CONTAINER_STYLE,
    DECK_AND_INFO_CONTAINER,
} from './StatisticPage.styles';
import InfoText from './views/InfoText';

function StatisticsPage(): ReactElement {
    const [statistic] = useAtom(statisticAtom);
    const [decks] = useAtom(decksAtom);

    return (
        <DefaultLayout>
            <Box sx={CONTAINER_STYLE}>
                <Box sx={TITLE_CONTAINER_STYLE}>
                    <Text fontSize={5}>Stats</Text>
                </Box>

                <Box m={3}>
                    <InfoText>
                        Total time spent: {formatSeconds(statistic.overralSecondsSpent)}
                    </InfoText>
                    <InfoText>
                        Total practiced cards: {statistic.overralPracticedCardCount}
                    </InfoText>
                    <InfoText>Total turned back cards: {statistic.overralTurnBackCount}</InfoText>
                </Box>

                <Box m={3}>
                    <Text fontSize={5}>Deck Stats</Text>
                    <Box>
                        {Object.keys(statistic.deckStatistics).map((deckId) => (
                            <Box key={deckId} sx={DECK_AND_INFO_CONTAINER}>
                                <Deck deck={decks[deckId]} onDeckClick={() => {}} />
                                <Box ml={3} mt={[3, 0, 0]}>
                                    <InfoText>
                                        Total time spent:{' '}
                                        {formatSeconds(
                                            statistic.deckStatistics[deckId].secondsSpent
                                        )}{' '}
                                    </InfoText>
                                    <InfoText>
                                        Practice count:{' '}
                                        {statistic.deckStatistics[deckId].practiceCount}
                                    </InfoText>
                                    <InfoText>
                                        Practiced card count:{' '}
                                        {statistic.deckStatistics[deckId].practicedCardCount}
                                    </InfoText>
                                    <InfoText>
                                        Turned card count:{' '}
                                        {statistic.deckStatistics[deckId].turnBackCount}
                                    </InfoText>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </DefaultLayout>
    );
}

export default StatisticsPage;
