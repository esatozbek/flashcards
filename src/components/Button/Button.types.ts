import { ThemeUIStyleObject } from 'theme-ui';

export type ButtonPropTypes = {
    text: string;
    onClick?: () => void;
    style?: ThemeUIStyleObject;
};

export default ButtonPropTypes;
