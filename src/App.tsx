/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import DefaultLayout from 'layouts/DefaultLayout';
import Router from 'router';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <DefaultLayout>
                <Router />
            </DefaultLayout>
        </ThemeProvider>
    );
}

export default App;
