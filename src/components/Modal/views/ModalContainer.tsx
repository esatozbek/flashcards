/** @jsxImportSource theme-ui */
import { ReactElement, forwardRef, LegacyRef, useMemo } from 'react';
import { Text } from 'components/Typography';
import {
    CONTAINER,
    MODAL_CONTAINER,
    MODAL_HEADER_CONTAINER,
    MODAL_CONTAINER_BOTTOM,
    MODAL_CONTAINER_RIGHT,
} from './ModalContainer.styles';
import { ModalContainerPropTypes } from './ModalContainer.types';

function ModalContainer(
    { title, children, direction = 'bottom', absoluteContent }: ModalContainerPropTypes,
    ref: LegacyRef<HTMLDivElement>
): ReactElement {
    const directionContainerStyle = useMemo(() => {
        if (direction === 'bottom') {
            return MODAL_CONTAINER_BOTTOM;
        }
        return MODAL_CONTAINER_RIGHT;
    }, [direction]);

    return (
        <div sx={CONTAINER}>
            {absoluteContent}
            <div ref={ref} sx={{ ...MODAL_CONTAINER, ...directionContainerStyle }}>
                <div sx={MODAL_HEADER_CONTAINER}>
                    <Text fontSize={5}>{title}</Text>
                </div>
                <div sx={{ m: 3 }}>{children}</div>
            </div>
        </div>
    );
}

export default forwardRef(ModalContainer);
