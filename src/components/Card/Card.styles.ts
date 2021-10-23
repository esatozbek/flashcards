import { DECK_HEIGHT, DECK_WIDTH } from 'components/Deck/Deck.constants';
import { StylePropertyValue } from 'theme-ui';

export const CONTAINER_STYLE = {
    height: `${DECK_HEIGHT}px`,
    width: `${DECK_WIDTH}px`,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    perspective: '1000px',
};

export const CARD_HOLDER_STYLE = {
    position: 'relative' as StylePropertyValue<any>,
    height: '100%',
    width: '100%',
    transition: 'transform .6s',
    transformStyle: 'preserve-3d' as StylePropertyValue<any>,
};

export const ROTATE_CARD_STYLE = {
    transform: 'rotateY(180deg)' as StylePropertyValue<any>,
};

export const FRONT_CONTAINER = {
    position: 'absolute' as StylePropertyValue<any>,
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden' as StylePropertyValue<any>,
    backgroundColor: '#D1495B',
};

export const FRONT_CONTENT = {
    margin: 2,
    backgroundColor: 'rgba(256, 256, 256, .2)',
    padding: 2,
    borderRadius: '16px',
    wordBreak: 'break-word' as StylePropertyValue<any>,
};

export const BACK_CONTAINER = {
    position: 'absolute' as StylePropertyValue<any>,
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden' as StylePropertyValue<any>,
    transform: 'rotateY(180deg)',
    backgroundColor: 'primary',
    wordBreak: 'break-word' as StylePropertyValue<any>,
};
