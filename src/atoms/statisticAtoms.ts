import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type TStatistics = {
    overralSecondsSpent: number;
    overralPracticedCardCount: number;
    overralTurnBackCount: number;
    deckStatistics: { [key: string]: TDeckStatistic };
};

type TDeckStatistic = {
    secondsSpent: number;
    practiceCount: number;
    practicedCardCount: number;
    turnBackCount: number;
};

export const statisticAtom = atomWithStorage<TStatistics>('statistics', {
    overralSecondsSpent: 0,
    overralPracticedCardCount: 0,
    overralTurnBackCount: 0,
    deckStatistics: {},
});

export const appendPracticeStatisticsAtom = atom<
    null,
    { timeSpent: number; practicedCardCount: number; deckId: string; turnBackCount: number }
>(null, (_get, set, payload) => {
    const { timeSpent, practicedCardCount, deckId, turnBackCount } = payload;

    set(statisticAtom, (statistic) => {
        const oldStatistic = statistic.deckStatistics[deckId] || {
            secondsSpent: 0,
            practiceCount: 0,
            practicedCardCount: 0,
            turnBackCount: 0,
        };

        return {
            overralSecondsSpent: statistic.overralSecondsSpent + timeSpent,
            overralPracticedCardCount: statistic.overralPracticedCardCount + practicedCardCount,
            overralTurnBackCount: statistic.overralTurnBackCount + turnBackCount,
            deckStatistics: {
                ...statistic.deckStatistics,
                [deckId]: {
                    secondsSpent: oldStatistic.secondsSpent + timeSpent,
                    practiceCount: oldStatistic.practiceCount + 1,
                    practicedCardCount: oldStatistic.practicedCardCount + practicedCardCount,
                    turnBackCount: oldStatistic.turnBackCount + turnBackCount,
                },
            },
        };
    });
});
