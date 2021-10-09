import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';
import DeckListPage from 'pages/DeckListPage';
import CardListPage from 'pages/CardListPage';
import StatisticsPage from 'pages/StatisticsPage';

type TRoutes = {
    page: () => ReactElement;
} & RouteProps;

const routes: TRoutes[] = [
    {
        path: '/',
        page: DeckListPage,
        exact: true,
    },
    {
        path: '/deck',
        page: CardListPage,
    },
    {
        path: '/statistics',
        page: StatisticsPage,
    },
];

export default routes;
