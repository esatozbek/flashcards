import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { v4 as uuidv4 } from 'uuid';
import { TCard } from 'types/card.types';

import { decksAtom } from './deckAtoms';

export type TCardsAtom = {
    [key: string]: TCard;
};

export const cardsAtom = atomWithStorage<TCardsAtom>('flashcards_cards', {});

export const addCardAtom = atom<
    null,
    { frontContent: string; backContent: string; deckId: string }
>(null, (_get, set, action) => {
    const newCardUuid = uuidv4();
    const newCard: TCard = {
        uuid: newCardUuid,
        frontContent: action.frontContent,
        backContent: action.backContent,
        creationDate: Date.now(),
        statistics: {
            practiceCount: 0,
            flipCount: 0,
        },
    };
    set(cardsAtom, (cards) => ({ ...cards, [newCard.uuid]: newCard }));
    set(decksAtom, (decks) => {
        const decksCopy = { ...decks };
        const deck = decksCopy[action.deckId];
        if (deck) {
            deck.cardIds = [...deck.cardIds, newCardUuid];
        }
        return decksCopy;
    });
});
