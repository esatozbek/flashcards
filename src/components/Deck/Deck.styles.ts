/** @jsxImportSource theme-ui */
import { DECK_HEIGHT } from './Deck.constants';
import { StylePropertyValue } from 'theme-ui';

export const WRAPPER_STYLE = {
    variant: 'styles.boxes.deck',
    position: 'relative' as StylePropertyValue<any>,
    cursor: 'pointer',
};

export const FIRST_CARD_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: 0,
    left: 0,
    bg: 'firstCard',
    height: '100%',
    width: '100%',
    zIndex: 100,
};

export const SECOND_CARD_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: '4px',
    left: '4px',
    bg: 'secondCard',
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
    bg: 'thirdCard',
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
    width: '100%',
    zIndex: 100,
    p: 3,
    color: 'white',
};
