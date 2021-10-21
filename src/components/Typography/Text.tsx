/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { TextPropTypes } from './Typography.types';

function Text({
    children,
    fontSize = 2,
    fontFamily = 'body',
    as = 'span',
}: TextPropTypes): ReactElement {
    const Component = as;

    return (
        <Component
            sx={{
                fontFamily,
                fontWeight: 'body',
                lineHeight: 'heading',
                letterSpacing: 'body',
                fontSize,
            }}
        >
            {children}
        </Component>
    );
}

export default Text;
