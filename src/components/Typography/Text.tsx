/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { TextPropTypes } from './Typography.types';

function Text({ children, fontSize = 2, fontFamily = 'body' }: TextPropTypes): ReactElement {
    return (
        <span
            sx={{
                fontFamily,
                fontWeight: 'body',
                lineHeight: 'heading',
                letterSpacing: 'body',
                fontSize,
            }}
        >
            {children}
        </span>
    );
}

export default Text;
