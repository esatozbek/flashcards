import { ReactNode } from 'react';

export type ModalPropTypes = {
    title: string;
    showModal: boolean;
    onCloseModal?: () => void;
    children: ReactNode;
    direction?: 'right' | 'bottom';
    absoluteContent?: ReactNode;
};
