/** @jsxImportSource theme-ui */
import {
    ReactElement,
    useState,
    useRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    forwardRef,
    Ref,
} from 'react';
import { Box } from 'theme-ui';
import { Text } from 'components/Typography';
import isTouchScreen from 'utils/isTouchScreen';
import { CardPropTypes, TCardRef } from './Card.types';
import {
    CONTAINER_STYLE,
    FRONT_CONTAINER,
    BACK_CONTAINER,
    FRONT_CONTENT,
    CARD_HOLDER_STYLE,
    ROTATE_CARD_STYLE,
} from './Card.styles';

function Card(
    { card, autoTurn = true }: CardPropTypes,
    ref: Ref<TCardRef> | undefined
): ReactElement {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isHover, setHover] = useState<boolean>(false);

    const handleMouseEnter = useCallback(() => {
        if (autoTurn) {
            setHover(true);
        }
    }, [setHover, autoTurn]);

    const handleMouseLeave = useCallback(() => {
        if (autoTurn) {
            setHover(false);
        }
    }, [setHover, autoTurn]);

    const handleClick = useCallback(
        (e: React.SyntheticEvent) => {
            e.stopPropagation();

            if (isTouchScreen() && autoTurn) {
                setHover((prevHover) => !prevHover);
            }
        },
        [setHover, autoTurn]
    );

    useEffect(() => {
        setHover(false);
    }, [card, setHover]);

    useEffect(() => {
        const { current } = containerRef;

        if (!isTouchScreen()) {
            current?.addEventListener('mouseenter', handleMouseEnter);
            current?.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                current?.removeEventListener('mouseenter', handleMouseEnter);
                current?.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [containerRef, handleMouseEnter, handleMouseLeave, handleClick]);

    useImperativeHandle(ref, () => ({
        turnCard() {
            setHover((prevIsHover) => !prevIsHover);
        },
    }));

    return (
        <Box sx={CONTAINER_STYLE} ref={containerRef} onClick={handleClick}>
            <Box
                sx={{
                    ...CARD_HOLDER_STYLE,
                    ...(isHover && ROTATE_CARD_STYLE),
                }}
            >
                <Box sx={FRONT_CONTAINER}>
                    <Box sx={FRONT_CONTENT}>
                        <Text fontFamily="heading">{card?.frontContent}</Text>
                    </Box>
                </Box>
                <Box sx={BACK_CONTAINER}>
                    <Box sx={FRONT_CONTENT}>
                        <Text fontFamily="heading">{card?.backContent}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default forwardRef(Card);
