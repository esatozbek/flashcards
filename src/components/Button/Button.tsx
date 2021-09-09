/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { ButtonPropTypes } from './Button.types';
import { BUTTON_STYLE } from './Button.styles';
import { Text } from 'components/Typography';

function Button({ text, onClick }: ButtonPropTypes): ReactElement {
    return (
        <button sx={BUTTON_STYLE} onClick={onClick}>
            <Text fontSize={3}>{text}</Text>
        </button>
    );
}

export default Button;
