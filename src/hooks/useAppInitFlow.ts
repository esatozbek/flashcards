import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { decksAtom } from 'atoms/deckAtoms';
import { cardsAtom, TCardsAtom } from 'atoms/cardAtoms';

function useAppInitFlow() {
    const [decks] = useAtom(decksAtom);
    const [, setCards] = useAtom(cardsAtom);

    useEffect(() => {
        const cardItems = decks
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useAppInitFlow;
