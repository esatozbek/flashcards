import { ReactElement } from 'react';

export type ModalPropTypes = {
    showModal: boolean;
    onCloseModal?: () => void;
    children: ReactElement | string;
};
