/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from 'components/Typography';
import { HeaderLinkPropTypes } from './HeaderLink.types';
import { LINK_STYLE } from '../Header.styles';

function HeaderLink({ target, children }: HeaderLinkPropTypes): ReactElement {
    const history = useHistory();

    const handleClick = useCallback(() => {
        history.push(target);
    }, [history, target]);

    return (
        <div sx={LINK_STYLE} onClick={handleClick}>
            <Text fontSize={4}>{children}</Text>
        </div>
    );
}

export default HeaderLink;
