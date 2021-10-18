import type { Theme } from 'theme-ui';
import { DECK_HEIGHT, DECK_WIDTH } from 'components/Deck/Deck.constants';
import fonts from './fonts';

const theme: Theme = {
    breakpoints: ['652px', '1000px', '1200px'],
    space: [0, 8, 12, 16, 32, 48, 64, 92, 128],
    colors: {
        text: '#000',
        background: '#E5E5E5',
        primary: '#ECBA82',
        secondary: '#DAD4EF',
        firstCard: '#D1495B',
        secondCard: '#A755C2',
        thirdCard: '#B07C9E',
    },
    styles: {
        root: {
            body: {},
        },
        boxes: {
            deck: {
                height: `${DECK_HEIGHT}px`,
                width: `${DECK_WIDTH}px`,
            },
        },
    },
    grids: {
        deckGrid: {
            gridTemplateColumns: ['repeat(1, 252px)', 'repeat(2, 252px)', 'repeat(3, 252px)'],
            rowGap: 4,
            columnGap: 7,
            mt: 3,
            justifyContent: 'center',
        },
    },
    buttons: {
        primary: {
            bg: 'secondary',
            border: 'none',
            boxShadow: 'inset 0px 0px 0px 5px #6622CC, 5px 5px 2px 0px black',
            py: 3,
            px: 4,
            transition: 'all .2s',
            transform: 'translateX(-2px) translateY(-2px)',
            '&:active': {
                boxShadow: 'inset 0px 0px 0px 2px #6622CC',
                transform: 'translateX(0px) translateY(0px)',
            },
        },
        secondary: {
            bg: '#d4dbef',
            border: 'none',
            boxShadow: 'inset 0px 0px 0px 5px #2266cc, 5px 5px 2px 0px black',
            py: 3,
            px: 4,
            transition: 'all .2s',
            transform: 'translateX(-2px) translateY(-2px)',
            '&:active': {
                boxShadow: 'inset 0px 0px 0px 2px #2266cc',
                transform: 'translateX(0px) translateY(0px)',
            },
        },
    },
    ...fonts,
};

export default theme;
