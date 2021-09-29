import { ReactNode } from 'react';

export type ModalContainerPropTypes = {
    title: string;
    children: ReactNode;
    direction?: 'right' | 'bottom';
    absoluteContent?: ReactNode;
    modalBodyVisible?: boolean;
};
