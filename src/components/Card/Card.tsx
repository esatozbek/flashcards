/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback } from 'react';
import { Text } from 'components/Typography';
import { CardPropTypes } from './Card.types';
import {
    CONTAINER_STYLE,
    FRONT_CONTAINER,
    BACK_CONTAINER,
    FRONT_CONTENT,
    CARD_HOLDER_STYLE,
    ROTATE_CARD_STYLE,
} from './Card.styles';

function Card({ card }: CardPropTypes): ReactElement {
    const [isHover, setHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, [setHover]);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, [setHover]);

    return (
        <div sx={CONTAINER_STYLE} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div
                sx={{
                    ...CARD_HOLDER_STYLE,
                    ...(isHover && ROTATE_CARD_STYLE),
                }}
            >
                <div sx={FRONT_CONTAINER}>
                    <div sx={FRONT_CONTENT}>
                        <Text fontFamily="heading">{card?.frontContent}</Text>
                    </div>
                </div>
                <div sx={BACK_CONTAINER}>
                    <Text fontFamily="heading">{card?.backContent}</Text>
                </div>
            </div>
        </div>
    );
}

export default Card;
