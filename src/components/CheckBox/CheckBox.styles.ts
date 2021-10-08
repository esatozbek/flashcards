import { StylePropertyValue } from 'theme-ui';

export const CONTAINER_STYLE = {
    height: '32px',
    width: '64px',
    boxShadow: '4px 4px 1px 1px rgb(0 0 0 / 75%)',
    position: 'relative' as StylePropertyValue<any>,
    cursor: 'pointer',
    transition: 'all .2s',
    bg: 'secondary',
};

export const CONTAINER_CHECKED_STYLE = {
    bg: '#7EE081',
};

export const BOX_STYLE = {
    width: '50%',
    height: '100%',
    position: 'absolute' as StylePropertyValue<any>,
    bg: '#A755C2',
    border: '4px solid #6622CC',
    transition: 'all .2s',
    left: '0',
};

export const CHECKED_BOX_STYLE = {
    left: '50%',
};
