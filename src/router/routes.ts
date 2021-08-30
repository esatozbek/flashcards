import { RouteProps } from 'react-router-dom';
import DeckList from 'pages/DeckList';
import CardList from 'pages/CardList';

const routes: RouteProps[] = [
    {
        path: '/',
        component: DeckList,
        exact: true,
    },
    {
        path: '/cardlist',
        component: CardList,
    },
];

export default routes;
