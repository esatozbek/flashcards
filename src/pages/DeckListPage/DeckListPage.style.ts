import { StylePropertyValue } from 'theme-ui';

export const CONTAINER_STYLE = {
    mx: 7,
    mt: 4,
};

export const TOP_CONTAINER_STYLE = {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column' as StylePropertyValue<any>,
};

export const DECK_CONTAINER_STYLE = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    rowGap: 4,
    columnGap: 4,
    mt: 3,
};
