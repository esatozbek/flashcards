import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { decksAtom, TDeckAtom } from 'atoms/deckAtoms';
import { cardsAtom, TCardsAtom } from 'atoms/cardAtoms';

function useAppInitFlow() {
    const [decks, setDecks] = useAtom(decksAtom);
    const [cards, setCards] = useAtom(cardsAtom);

    useEffect(() => {
        if (Object.values(decks).length === 0) {
            const mockDecks = Array(5)
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
                }, {});
            setDecks(mockDecks);
        }

        if (!cards || Object.values(cards).length === 0) {
            const cardItems = Object.values(decks)
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
                }, {});
            setCards(cardItems);
        }
    }, [cards, decks, setCards, setDecks]);
}

export default useAppInitFlow;
