import { StylePropertyValue } from 'theme-ui';

export const CONTAINER_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
    '@media screen and (max-width: 1000px)': {
        top: 3,
        left: '50%',
        transform: 'translateX(-50%)',
    },
};
