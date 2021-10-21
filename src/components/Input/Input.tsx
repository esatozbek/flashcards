/** @jsxImportSource theme-ui */
import { Input as ThemeInput } from '@theme-ui/components';
import { InputPropTypes } from './Input.types';

function Input({ placeholder, value, onChange }: InputPropTypes) {
    return (
        <ThemeInput
            variant="styles.inputs.primary"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
