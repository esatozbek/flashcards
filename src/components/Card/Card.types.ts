import { TCard } from 'types/card.types';

export type CardPropTypes = {
    card?: TCard;
    autoTurn?: boolean;
};

export type TCardRef = {
    turnCard: () => void;
};
