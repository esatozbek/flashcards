/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback } from 'react';
import { Text } from 'components/Typography';
import { CardPropTypes } from './Card.types';
import { CONTAINER_STYLE } from './Card.styles';
import { DECK_HEIGHT, DECK_WIDTH } from 'components/Deck/Deck.constants';

function Card({ card }: CardPropTypes): ReactElement {
    const [isHover, setHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, [setHover]);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, [setHover]);

    return (
        <div
            sx={{
                height: `${DECK_HEIGHT}px`,
                width: `${DECK_WIDTH}px`,
                cursor: 'pointer',
                backgroundColor: 'transparent',
                perspective: '1000px',
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div
                sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    transition: 'transform .6s',
                    transformStyle: 'preserve-3d',
                    ...(isHover && { transform: 'rotateY(180deg)' }),
                }}
            >
                <div
                    sx={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backfaceVisibility: 'hidden',
                        backgroundColor: '#D1495B',
                    }}
                >
                    <div
                        sx={{
                            margin: 3,
                            backgroundColor: 'rgba(0, 0, 0, .2)',
                            padding: 3,
                            borderRadius: '16px',
                            wordBreak: 'break-word',
                        }}
                    >
                        <Text fontFamily="heading">{card?.frontContent}</Text>
                    </div>
                </div>
                <div
                    sx={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        backgroundColor: 'primary',
                        wordBreak: 'break-word',
                    }}
                >
                    <Text fontFamily="heading">{card?.backContent}</Text>
                </div>
            </div>
        </div>
    );
}

export default Card;
