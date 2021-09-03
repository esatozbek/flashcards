export const BUTTON_STYLE = {
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
};
