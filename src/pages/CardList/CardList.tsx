import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { TLocationState } from 'types/location.types';

function CardList(): ReactElement {
    const location = useLocation<TLocationState>();

    console.log(location.state.deck);
    return <div>{location.state.deck?.deckName}</div>;
}

export default CardList;
