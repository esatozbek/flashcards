import { ReactElement } from 'react';

export type ButtonPropTypes = {
    children: ReactElement | string;
    onClick?: () => void;
};

export default ButtonPropTypes;
