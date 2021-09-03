import { ReactElement } from 'react';

export type HeaderLinkPropTypes = {
    children?: ReactElement | string;
    onClick?: () => void;
};
