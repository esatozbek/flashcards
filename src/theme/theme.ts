import type { Theme } from 'theme-ui';
import fonts from './fonts';

const theme: Theme = {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 8, 12, 16, 32, 48, 64, 92, 128],
    colors: {
        text: '#000',
        background: '#E5E5E5',
        primary: '#ECBA82',
        secondary: '#DAD4EF',
    },
    ...fonts,
};

export default theme;
