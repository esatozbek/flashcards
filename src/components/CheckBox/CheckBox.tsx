/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { CheckBoxPropTypes } from './CheckBox.types';
import {
    CONTAINER_STYLE,
    CONTAINER_CHECKED_STYLE,
    BOX_STYLE,
    CHECKED_BOX_STYLE,
} from './CheckBox.styles';

function CheckBox({ checked, onChange }: CheckBoxPropTypes): ReactElement {
    const handleClick = useCallback(() => {
        onChange(!checked);
    }, [onChange, checked]);

    return (
        <div
            sx={{
                ...CONTAINER_STYLE,
                ...(checked && CONTAINER_CHECKED_STYLE),
            }}
            onClick={handleClick}
        >
            <div
                sx={{
                    ...BOX_STYLE,
                    ...(checked && CHECKED_BOX_STYLE),
                }}
            ></div>
        </div>
    );
}

export default CheckBox;
