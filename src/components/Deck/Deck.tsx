/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback } from 'react';
import { Box } from 'theme-ui';
import { Text } from 'components/Typography';
import { DeckPropTypes } from './Deck.types';
import {
    WRAPPER_STYLE,
    FIRST_CARD_STYLE,
    SECOND_CARD_STYLE,
    SECOND_CARD_HOVER_STYLE,
    THIRD_CARD_STYLE,
    THIRD_CARD_HOVER_STYLE,
    BOTTOM_BOX_STYLE,
} from './Deck.styles';

function Deck({ deck, onDeckClick }: DeckPropTypes): ReactElement {
    const [isHover, setHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, [setHover]);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, [setHover]);

    const handleDeckClick = useCallback(() => {
        onDeckClick(deck);
    }, [deck, onDeckClick]);

    return (
        <Box
            sx={WRAPPER_STYLE}
            onClick={handleDeckClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Box sx={FIRST_CARD_STYLE}></Box>
            <Box
                sx={{
                    ...SECOND_CARD_STYLE,
                    ...(isHover && SECOND_CARD_HOVER_STYLE),
                }}
            ></Box>
            <Box
                sx={{
                    ...THIRD_CARD_STYLE,
                    ...(isHover && THIRD_CARD_HOVER_STYLE),
                }}
            ></Box>
            <Box sx={BOTTOM_BOX_STYLE}>
                <Text fontSize={3}>{deck.deckName}</Text>
            </Box>
        </Box>
    );
}

export default Deck;
