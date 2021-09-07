/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import DefaultLayout from 'layouts/DefaultLayout';
import Router from 'router';

function App(): ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <DefaultLayout>
                <Router />
            </DefaultLayout>
            <div id="modal-root"></div>
        </ThemeProvider>
    );
}

export default App;
