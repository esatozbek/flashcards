import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { v4 as uuidv4 } from 'uuid';
import { TDeck } from 'types/deck.types';

type TDeckAtom = { [key: string]: TDeck };

export const decksAtom = atomWithStorage<TDeckAtom>(
    'flashcards_decks',
    Array(5)
        .fill(0)
        .map((_, i) => ({
            deckId: uuidv4(),
            deckName: `Deck ${i}`,
            cardIds: Array(5)
                .fill(0)
                .map(() => uuidv4()),
        }))
        .reduce<TDeckAtom>((acc: TDeckAtom, deck) => {
            acc[deck.deckId] = deck;
            return acc;
        }, {})
);

export const addDeckAtom = atom<null, { deckName: string; cardIds: string[] }>(
    null,
    (_get, set, deck) => {
        const newDeckUuid = uuidv4();
        set(decksAtom, (decks) => ({ ...decks, [newDeckUuid]: { deckId: newDeckUuid, ...deck } }));
    }
);
