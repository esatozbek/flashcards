/** @jsxImportSource theme-ui */
import { DECK_HEIGHT, DECK_WIDTH } from './Deck.constants';
import { StylePropertyValue } from 'theme-ui';

export const WRAPPER_STYLE = {
    position: 'relative' as StylePropertyValue<any>,
    height: `${DECK_HEIGHT}px`,
    width: `${DECK_WIDTH}px`,
    // margin: 5,
    cursor: 'pointer',
};

export const FIRST_CARD_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: 0,
    left: 0,
    bg: '#D1495B',
    height: '100%',
    width: '100%',
    zIndex: 100,
};

export const SECOND_CARD_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: '4px',
    left: '4px',
    bg: '#A755C2',
    height: '100%',
    width: '100%',
    zIndex: 10,
    transition: 'all .2s',
};

export const SECOND_CARD_HOVER_STYLE = {
    transform: 'rotate(-8deg) scale(0.9)',
    left: `-${DECK_HEIGHT / 10}px`,
    bottom: 0,
};

export const THIRD_CARD_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: '8px',
    left: '8px',
    bg: '#B07C9E',
    height: '100%',
    width: '100%',
    zIndex: 1,
    transition: 'all .2s',
};

export const THIRD_CARD_HOVER_STYLE = {
    transform: 'rotate(-16deg) scale(0.8)',
    left: `-${DECK_HEIGHT / 5}px`,
    bottom: 0,
};

export const BOTTOM_BOX_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    bottom: 0,
    left: 0,
    bg: 'rgba(67, 67, 67, .6)',
    height: '50px',
    width: '100%',
    zIndex: 100,
    // filter: 'blur(2px)',
};
