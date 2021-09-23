import { atom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { TCard } from 'types/card.types';

import { decksAtom } from './deckAtoms';

export type TCardsAtom = {
    [key: string]: TCard;
};

// export const cardsAtom = atom<TCardsAtom, TCardsAtom>(
//     (get) =>
//         get(decksAtom)
//             .flatMap((deck) => deck.cardIds)
//             .map((cardUuid, i) => ({
//                 uuid: cardUuid,
//                 creationDate: Date.now(),
//                 frontContent: `Front ${i}`,
//                 backContent: `Back ${i}`,
//                 statistics: {
//                     practiceCount: 0,
//                     flipCount: 0,
//                 },
//             }))
//             .reduce<TCardsAtom>((acc: TCardsAtom, card) => {
//                 acc[card.uuid] = card;
//                 return acc;
//             }, {}),
//     (_get, set, update) => {
//         set(cardsAtom, update);
//     }
// );

export const cardsAtom = atom<TCardsAtom>({});

export const addCardAtom = atom<
    null,
    { frontContent: string; backContent: string; deckId: string }
>(null, (get, set, action) => {
    const cardUuid = uuidv4();
    const newCard: TCard = {
        uuid: cardUuid,
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
        const deckCopy = [...decks];
        const deck = deckCopy.find((deck) => deck.deckId === action.deckId);
        if (deck) {
            deck.cardIds = [...deck.cardIds, cardUuid];
        }
        return [...decks];
    });
});
