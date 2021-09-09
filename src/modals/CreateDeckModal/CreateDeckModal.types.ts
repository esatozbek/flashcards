export type CreateDeckModalPropTypes = {
    isDeckModalOpen: boolean;
    onCloseModal: () => void;
    onCreateDeck: (deckName: string) => void;
};
