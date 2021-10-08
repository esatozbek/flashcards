/** @jsxImportSource theme-ui */
import {
    ReactElement,
    useState,
    useCallback,
    useEffect,
    useImperativeHandle,
    forwardRef,
    Ref,
} from 'react';
import { Text } from 'components/Typography';
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
    const [isHover, setHover] = useState<boolean>(false);

    useEffect(() => {
        setHover(false);
    }, [card, setHover]);

    const onMouseEnter = useCallback(() => {
        if (autoTurn) {
            setHover(true);
        }
    }, [setHover, autoTurn]);

    const onMouseLeave = useCallback(() => {
        if (autoTurn) {
            setHover(false);
        }
    }, [setHover, autoTurn]);

    useImperativeHandle(ref, () => ({
        turnCard() {
            setHover((prevIsHover) => !prevIsHover);
        },
    }));

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

export default forwardRef(Card);
