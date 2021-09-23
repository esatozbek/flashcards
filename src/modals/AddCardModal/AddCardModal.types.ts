export type AddCardModalPropTypes = {
    isModalOpen: boolean;
    onCloseModal: () => void;
    onAddCard: (frontContent: string, backContent: string) => void;
};
