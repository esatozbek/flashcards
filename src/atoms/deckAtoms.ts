import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { v4 as uuidv4 } from 'uuid';
import { TDeck } from 'types/deck.types';

export type TDeckAtom = { [key: string]: TDeck };

export const decksAtom = atomWithStorage<TDeckAtom>('flashcards_decks', {});

export const addDeckAtom = atom<null, { deckName: string; cardIds: string[] }>(
    null,
    (_get, set, deck) => {
        const newDeckUuid = uuidv4();
        set(decksAtom, (decks) => ({ ...decks, [newDeckUuid]: { deckId: newDeckUuid, ...deck } }));
    }
);
