import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({ page: Page, ...route }) => (
                    <Route {...route}>
                        <Page />
                    </Route>
                ))}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
