import { InputProps } from '@theme-ui/components';
import { ChangeEventHandler } from 'react';

export type InputPropTypes = {
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
} & InputProps;
