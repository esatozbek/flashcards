/** @jsxImportSource theme-ui */
import { ReactElement, forwardRef, LegacyRef } from 'react';
import { Text } from 'components/Typography';

function ModalContainer(
    {
        children,
    }: {
        children: ReactElement | string;
    },
    ref: LegacyRef<HTMLDivElement>
): ReactElement {
    return (
        <div
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
            }}
        >
            <div
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    width: '100vw',
                    bg: 'rgba(0, 0, 0, .2)',
                    zIndex: 500,
                }}
            ></div>
            <div
                ref={ref}
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50vw',
                    height: '65vh',
                    bg: 'primary',
                    zIndex: '1000',
                    boxShadow: '12px 12px 4px 0px rgb(0 0 0 / 25%)',
                }}
            >
                <div sx={{ m: 3, borderBottom: '1px solid black', width: '65%', py: 3, px: 2 }}>
                    <Text>CS Deck</Text>
                </div>
                <div sx={{ m: 3 }}>{children}</div>
            </div>
        </div>
    );
}

export default forwardRef(ModalContainer);
