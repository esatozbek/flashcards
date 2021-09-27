/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { CheckBoxPropTypes } from './CheckBox.types';

function CheckBox({ checked, onChange }: CheckBoxPropTypes): ReactElement {
    const handleClick = useCallback(() => {
        onChange(!checked);
    }, [onChange, checked]);

    return (
        <div
            sx={{
                height: '32px',
                width: '64px',
                boxShadow: '4px 4px 1px 1px rgb(0 0 0 / 75%)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all .2s',
                ...(checked ? { bg: '#7EE081' } : { bg: 'secondary' }),
            }}
            onClick={handleClick}
        >
            <div
                sx={{
                    width: '50%',
                    height: '100%',
                    position: 'absolute',
                    bg: '#A755C2',
                    border: '4px solid #6622CC',
                    transition: 'all .2s',
                    ...(checked ? { left: '50%' } : { left: '0' }),
                }}
            ></div>
        </div>
    );
}

export default CheckBox;
