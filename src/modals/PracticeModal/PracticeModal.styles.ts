import { StylePropertyValue } from 'theme-ui';

export const HEADER_CONTAINER_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: 0,
    width: '100%',
    p: 3,
    backgroundColor: 'primary',
    boxShadow: '4px 4px 2px 0px rgb(0 0 0 / 50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export const MODAL_ROW_STYLE = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export const CONTENT_CONTAINER_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex' as StylePropertyValue<any>,
    flexDirection: 'column' as StylePropertyValue<any>,
    alignItems: 'center' as StylePropertyValue<any>,
};

export const CONTENT_BOTTOM_STYLE = {
    position: 'absolute' as StylePropertyValue<any>,
    bottom: '-86px',
};

export const ARROW_CONTAINER_STYLE = {
    cursor: 'pointer',
};

export const CONTENT_INNER_BOTTOM_STYLE = {
    mt: 3,
    display: 'flex' as StylePropertyValue<any>,
    justifyContent: 'space-between' as StylePropertyValue<any>,
};

export const CONTENT_INNER_CONTAINER_STYLE = {
    display: 'relative',
    backgroundColor: 'secondary',
    boxShadow: '4px 4px 2px 0px rgb(0 0 0 / 50%)',
    p: 3,
};
