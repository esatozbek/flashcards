/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Text } from 'components/Typography';
import Card from 'components/Card';
import { cardsAtom } from 'atoms/cardAtoms';
import { TLocationState } from 'types/location.types';
import { CONTAINER_STYLE, HEADER_CONTAINER_STYLE, CARD_CONTAINER_STYLE } from './CardList.styles';

function CardList(): ReactElement {
    const location = useLocation<TLocationState>();
    const [cards] = useAtom(cardsAtom);
    const { deck } = location.state;

    console.log(location.state.deck);
    return (
        <div sx={CONTAINER_STYLE}>
            <div sx={HEADER_CONTAINER_STYLE}>
                <Text fontSize={5}>{location.state.deck?.deckName}</Text>
            </div>
            <div sx={CARD_CONTAINER_STYLE}>
                {deck?.cardIds.map((card) => (
                    <Card card={cards[card]} />
                ))}
            </div>
        </div>
    );
}

export default CardList;
