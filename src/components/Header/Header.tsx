/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import HeaderLink from './views/HeaderLink';
import { HEADER_CONTAINER_STYLE } from './Header.styles';

function Header(): ReactElement {
    return (
        <div sx={HEADER_CONTAINER_STYLE}>
            <HeaderLink>Decks</HeaderLink>
            <HeaderLink>Stats</HeaderLink>
        </div>
    );
}

export default Header;
