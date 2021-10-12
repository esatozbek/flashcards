/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { useAtom } from 'jotai';
import { Text } from 'components/Typography';
import Deck from 'components/Deck';
import { decksAtom } from 'atoms/deckAtoms';
import DefaultLayout from 'layouts/DefaultLayout';
import { statisticAtom } from 'atoms/statisticAtoms';
import formatSeconds from 'utils/formatSeconds';
import { CONTAINER_STYLE, TITLE_CONTAINER_STYLE } from './StatisticPage.styles';

function StatisticsPage(): ReactElement {
    const [statistic] = useAtom(statisticAtom);
    const [decks] = useAtom(decksAtom);

    return (
        <DefaultLayout>
            <div sx={CONTAINER_STYLE}>
                <div sx={TITLE_CONTAINER_STYLE}>
                    <Text fontSize={5}>Stats</Text>
                </div>

                <div sx={{ m: 3 }}>
                    <div>
                        <Text fontSize={5} fontFamily="heading">
                            Total time spent: {formatSeconds(statistic.overralSecondsSpent)}
                        </Text>
                    </div>
                    <div>
                        <Text fontSize={5} fontFamily="heading">
                            Total practiced cards: {statistic.overralPracticedCardCount}
                        </Text>
                    </div>
                    <div>
                        <Text fontSize={5} fontFamily="heading">
                            Total turned back cards: {statistic.overralTurnBackCount}
                        </Text>
                    </div>
                </div>

                <div sx={{ m: 3 }}>
                    <Text fontSize={5}>Deck Stats</Text>
                    <div>
                        {Object.keys(statistic.deckStatistics).map((deckId) => (
                            <div key={deckId} sx={{ display: 'flex', mb: 4 }}>
                                <Deck deck={decks[deckId]} onDeckClick={() => {}} />
                                <div sx={{ ml: 3 }}>
                                    <div>
                                        <Text fontSize={5} fontFamily="heading">
                                            Total time spent:{' '}
                                            {formatSeconds(
                                                statistic.deckStatistics[deckId].secondsSpent
                                            )}
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fontSize={5} fontFamily="heading">
                                            Practice count:{' '}
                                            {statistic.deckStatistics[deckId].practiceCount}
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fontSize={5} fontFamily="heading">
                                            Practiced card count:{' '}
                                            {statistic.deckStatistics[deckId].practicedCardCount}
                                        </Text>
                                    </div>
                                    <div>
                                        <Text fontSize={5} fontFamily="heading">
                                            Turned card count:{' '}
                                            {statistic.deckStatistics[deckId].turnBackCount}
                                        </Text>
                                    </div>
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
