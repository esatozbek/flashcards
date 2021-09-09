import { atom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { TCard } from 'types/card.types';

export const cardsAtom = atom<TCard[]>(
    Array(5)
        .fill(0)
        .map((_, i) => ({
            uuid: uuidv4(),
            creationDate: Date.now(),
            frontContent: `Front ${i}`,
            backContent: `Back ${i}`,
            statistics: {
                practiceCount: 0,
                flipCount: 0,
            },
        }))
);
