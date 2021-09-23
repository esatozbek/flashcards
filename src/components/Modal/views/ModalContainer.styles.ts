import { StylePropertyValue } from 'theme-ui';
import { keyframes } from '@emotion/react';

const fadeInBottom = keyframes({
    from: { bottom: '-100%' },
    to: { bottom: 0 },
});

const fadeInRight = keyframes({
    from: { right: '-100%' },
    to: { right: 0 },
});

export const CONTAINER = {
    position: 'absolute' as StylePropertyValue<any>,
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
};

export const MODAL_CONTAINER = {
    position: 'absolute' as StylePropertyValue<any>,
    width: '50vw',
    bg: 'primary',
    zIndex: '1000',
    boxShadow: '12px 12px 4px 0px rgb(0 0 0 / 50%)',
};

export const MODAL_CONTAINER_BOTTOM = {
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    animation: `.5s ${fadeInBottom}`,
};

export const MODAL_CONTAINER_RIGHT = {
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    animation: `.5s ${fadeInRight}`,
};

export const MODAL_HEADER_CONTAINER = {
    m: 3,
    borderBottom: '6px solid black',
    width: '75%',
    py: 3,
    px: 2,
};
