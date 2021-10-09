import { ReactNode } from 'react';

export type HeaderLinkPropTypes = {
    children: ReactNode;
    target: string;
    onClick?: () => void;
};
