/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { Button as ThemeButton } from 'theme-ui';
import { Text } from 'components/Typography';
import { ButtonPropTypes } from './Button.types';

function Button({ text, onClick, style, variant = 'primary' }: ButtonPropTypes): ReactElement {
    return (
        <ThemeButton
            onClick={onClick}
            sx={{ color: 'black', borderRadius: 0, ...style }}
            variant={variant}
        >
            <Text fontSize={3}>{text}</Text>
        </ThemeButton>
    );
}

export default Button;
