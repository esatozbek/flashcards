import { atom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { TDeck } from 'types/deck.types';

export const decksAtom = atom<TDeck[]>(
    Array(5)
        .fill(0)
        .map((_, i) => ({
            deckId: uuidv4(),
            deckName: `Deck ${i}`,
            cardIds: Array(5)
                .fill(0)
                .map(() => uuidv4()),
        }))
);

export const addDeckAtom = atom<null, { deckName: string; cardIds: string[] }>(
    null,
    (_get, set, deck) => {
        set(decksAtom, (decks) => [...decks, { deckId: uuidv4(), ...deck }]);
    }
);
