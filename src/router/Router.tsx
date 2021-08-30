import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route) => (
                    <Route {...route} />
                ))}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
