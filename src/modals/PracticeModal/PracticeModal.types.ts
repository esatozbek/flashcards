export type PracticeModalPropTypes = {
    showModal: boolean;
    onCloseModal: () => void;
    deckId: string;
};

export type PracticeFormPropTypes = {
    onStartPractice: (isShuffle: boolean, cardNumber: number) => void;
    defaultCardNumber?: number;
};

export type PracticeModalContentPropTypes = {
    currentState: string;
    onNextCard: () => void;
    onPrevCard: () => void;
    onEndPractice: (timeElapsed: number) => void;
};
