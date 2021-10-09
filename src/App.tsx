/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Router from 'router';
import useAppInitFlow from 'hooks/useAppInitFlow';

function App(): ReactElement {
    useAppInitFlow();

    return (
        <ThemeProvider theme={theme}>
            <Router />
            <div id="modal-root"></div>
        </ThemeProvider>
    );
}

export default App;
