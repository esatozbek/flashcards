import { ReactNode } from 'react';

export type ModalPropTypes = {
    title: string;
    showModal: boolean;
    onCloseModal?: () => void;
    children: ReactNode;
};
