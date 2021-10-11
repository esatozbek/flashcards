/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { useAtom } from 'jotai';
import { Text } from 'components/Typography';
import DefaultLayout from 'layouts/DefaultLayout';
import { statisticAtom } from 'atoms/statisticAtoms';
import formatSeconds from 'utils/formatSeconds';

function StatisticsPage(): ReactElement {
    const [statistic] = useAtom(statisticAtom);

    return (
        <DefaultLayout>
            <div>
                <div>
                    <Text fontSize={5}>
                        Total time spent: {formatSeconds(statistic.overralSecondsSpent)}
                    </Text>
                </div>
                <div>
                    <Text fontSize={5}>
                        Total practiced cards: {statistic.overralPracticedCardCount}
                    </Text>
                </div>
                <div>
                    <Text fontSize={5}>
                        Total turned back cards: {statistic.overralTurnBackCount}
                    </Text>
                </div>
                <div>
                    <Text fontSize={5}>Deck Stats</Text>
                    <div>
                        {Object.keys(statistic.deckStatistics).map((deckId) => (
                            <div>
                                <Text fontSize={5}>{deckId}</Text>

                                <div>
                                    <Text fontSize={5}>
                                        Total time spent:{' '}
                                        {formatSeconds(
                                            statistic.deckStatistics[deckId].secondsSpent
                                        )}
                                    </Text>
                                </div>
                                <div>
                                    <Text fontSize={5}>
                                        Practice count:{' '}
                                        {statistic.deckStatistics[deckId].practiceCount}
                                    </Text>
                                </div>
                                <div>
                                    <Text fontSize={5}>
                                        Practiced card count:{' '}
                                        {statistic.deckStatistics[deckId].practicedCardCount}
                                    </Text>
                                </div>
                                <div>
                                    <Text fontSize={5}>
                                        Turned card count:{' '}
                                        {statistic.deckStatistics[deckId].turnBackCount}
                                    </Text>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default StatisticsPage;
