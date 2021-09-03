/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { HeaderLinkPropTypes } from './HeaderLink.types';

function HeaderLink({ children }: HeaderLinkPropTypes): ReactElement {
    return (
        <a
            sx={{
                color: 'text',
                textDecoration: 'none',
                fontFamily: 'body',
                py: 4,
                px: 3,
                display: 'inline-block',
                '&:hover': {
                    bg: 'secondary',
                },
            }}
            href="#"
        >
            {children}
        </a>
    );
}

export default HeaderLink;
