/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import HeaderLink from './views/HeaderLink';
import Button from 'components/Button';
import { HEADER_CONTAINER_STYLE } from './Header.styles';

function Header(): ReactElement {
    return (
        <div sx={HEADER_CONTAINER_STYLE}>
            <HeaderLink>Decks</HeaderLink>
            <HeaderLink>Stats</HeaderLink>
            <Button>New Deck</Button>
        </div>
    );
}

export default Header;
