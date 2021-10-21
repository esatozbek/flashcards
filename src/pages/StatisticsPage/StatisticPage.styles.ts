import { StylePropertyValue } from '@theme-ui/css';

export const CONTAINER_STYLE = {
    mx: [2, 4, 7],
    my: 4,
};

export const TITLE_CONTAINER_STYLE = {
    width: '75%',
    borderBottom: '6px solid black',
    py: 3,
    px: 3,
    mr: 64,
    ml: 3,
    flex: 1,
};

export const DECK_AND_INFO_CONTAINER = {
    display: 'flex',
    mb: 4,
    flexDirection: ['column', 'row', 'row'] as StylePropertyValue<any>,
    alignItems: 'center',
};
