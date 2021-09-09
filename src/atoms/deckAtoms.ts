import { atom } from 'jotai';
import { TDeck } from 'types/deck.types';

export const decksAtom = atom<TDeck[]>(
    Array(5)
        .fill(0)
        .map((_, i) => ({
            deckName: `Deck ${i}`,
        }))
);
