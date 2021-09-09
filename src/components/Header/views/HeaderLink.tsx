/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { Text } from 'components/Typography';
import { HeaderLinkPropTypes } from './HeaderLink.types';

function HeaderLink({ children }: HeaderLinkPropTypes): ReactElement {
    return (
        <div
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
                cursor: 'pointer',
            }}
        >
            <Text fontSize={4}>{children}</Text>
        </div>
    );
}

export default HeaderLink;
