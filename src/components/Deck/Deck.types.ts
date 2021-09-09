import { TDeck } from 'types/deck.types';

export type DeckPropTypes = {
    deck: TDeck;
    onDeckClick: (deck: TDeck) => void;
};
