/** @jsxImportSource theme-ui */
import { InputPropTypes } from './Input.types';
import { INPUT_STYLE } from './Input.styles';

function Input({ placeholder, value, onChange }: InputPropTypes) {
    return (
        <input
            sx={INPUT_STYLE}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
