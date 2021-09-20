/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { Text } from 'components/Typography';
import { CardPropTypes } from './Card.types';
import { CONTAINER_STYLE } from './Card.styles';

function Card({ card }: CardPropTypes): ReactElement {
    return (
        <div sx={CONTAINER_STYLE}>
            <Text fontFamily="heading">{card?.frontContent}</Text>
        </div>
    );
}

export default Card;
