import { ReactElement } from 'react';
import Header from 'components/Header';
import { DefaultLayoutPropTypes } from './DefaultLayout.types';

function DefaultLayout({ children }: DefaultLayoutPropTypes): ReactElement {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
