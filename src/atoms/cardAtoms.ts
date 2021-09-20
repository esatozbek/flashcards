import { atom } from 'jotai';
import { TCard } from 'types/card.types';

import { decksAtom } from './deckAtoms';

type TCardsAtom = {
    [key: string]: TCard;
};

export const cardsAtom = atom<TCardsAtom>((get) =>
    get(decksAtom)
        .flatMap((deck) => deck.cardIds)
        .map((cardUuid, i) => ({
            uuid: cardUuid,
            creationDate: Date.now(),
            frontContent: `Front ${i}`,
            backContent: `Back ${i}`,
            statistics: {
                practiceCount: 0,
                flipCount: 0,
            },
        }))
        .reduce<TCardsAtom>((acc: TCardsAtom, card) => {
            acc[card.uuid] = card;
            return acc;
        }, {})
);
