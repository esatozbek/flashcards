import { HTMLProps } from 'react';

export type SvgPropTypes = {
    height?: 32;
    width?: 32;
} & HTMLProps<HTMLOrSVGElement>;
