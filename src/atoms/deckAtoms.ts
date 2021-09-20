import { atom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { TDeck } from 'types/deck.types';

export const decksAtom = atom<TDeck[]>(
    Array(5)
        .fill(0)
        .map((_, i) => ({
            deckName: `Deck ${i}`,
            cardIds: Array(5).fill(uuidv4()),
        }))
);
