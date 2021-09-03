/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback } from 'react';
import {
    WRAPPER_STYLE,
    FIRST_CARD_STYLE,
    SECOND_CARD_STYLE,
    SECOND_CARD_HOVER_STYLE,
    THIRD_CARD_STYLE,
    THIRD_CARD_HOVER_STYLE,
    BOTTOM_BOX_STYLE,
} from './Deck.styles';

function Deck(): ReactElement {
    const [isHover, setHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, [setHover]);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, [setHover]);

    return (
        <div sx={WRAPPER_STYLE} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div sx={FIRST_CARD_STYLE}></div>
            <div
                sx={{
                    ...SECOND_CARD_STYLE,
                    ...(isHover && SECOND_CARD_HOVER_STYLE),
                }}
            ></div>
            <div
                sx={{
                    ...THIRD_CARD_STYLE,
                    ...(isHover && THIRD_CARD_HOVER_STYLE),
                }}
            ></div>
            <div sx={BOTTOM_BOX_STYLE}></div>
        </div>
    );
}

export default Deck;
