/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { ButtonPropTypes } from './Button.types';
import { BUTTON_STYLE } from './Button.styles';

function Button({ children, onClick }: ButtonPropTypes): ReactElement {
    return (
        <button sx={BUTTON_STYLE} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
