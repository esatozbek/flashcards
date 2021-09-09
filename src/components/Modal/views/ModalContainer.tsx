/** @jsxImportSource theme-ui */
import { ReactElement, forwardRef, LegacyRef } from 'react';
import { Text } from 'components/Typography';
import { CONTAINER, MODAL_CONTAINER, MODAL_HEADER_CONTAINER } from './ModalContainer.styles';
import { ModalContainerPropTypes } from './ModalContainer.types';

function ModalContainer(
    { title, children }: ModalContainerPropTypes,
    ref: LegacyRef<HTMLDivElement>
): ReactElement {
    return (
        <div sx={CONTAINER}>
            <div ref={ref} sx={MODAL_CONTAINER}>
                <div sx={MODAL_HEADER_CONTAINER}>
                    <Text fontSize={5}>{title}</Text>
                </div>
                <div sx={{ m: 3 }}>{children}</div>
            </div>
        </div>
    );
}

export default forwardRef(ModalContainer);
