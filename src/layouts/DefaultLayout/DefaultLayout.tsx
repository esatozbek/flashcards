/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { useAtom } from 'jotai';
import Header from 'components/Header';
import { DefaultLayoutPropTypes } from './DefaultLayout.types';
import { isDeckModalOpenAtom } from 'atoms/modalAtoms';
import { MODAL_OPENED_FILTER } from './DefaultLayout.styles';

function DefaultLayout({ children }: DefaultLayoutPropTypes): ReactElement {
    const [showModal] = useAtom(isDeckModalOpenAtom);

    return (
        <div sx={{ ...(showModal && MODAL_OPENED_FILTER) }}>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
