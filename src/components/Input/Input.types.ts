import { ChangeEventHandler } from 'react';

export type InputPropTypes = {
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};
