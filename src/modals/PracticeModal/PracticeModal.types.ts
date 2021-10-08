import { TCard } from 'types/card.types';

export type PracticeModalPropTypes = {
    showModal: boolean;
    onCloseModal: () => void;
    deckId: string;
};

export type PracticeFormPropTypes = {
    onStartPractice: (isShuffle: boolean, cardNumber: number) => void;
};

export type PracticeModalHeaderPropTypes = {
    currentState: string;
    timeElapsed: number;
    selectedCardIdx: number;
    cardIdslength: number;
};

export type PracticeModalContentPropTypes = {
    currentState: string;
    countdown: number;
    currentCard: TCard;
    onNextCard: () => void;
    onPrevCard: () => void;
    timeElapsed: number;
    onEndPractice: () => void;
};
