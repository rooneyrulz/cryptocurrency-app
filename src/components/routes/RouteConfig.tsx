import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
const HomePage = React.lazy(() => import("components/pages/HomePage"));
const Exchanges = React.lazy(() => import("components/pages/Exchanges"));
const News = React.lazy(() => import("components/pages/News"));
const Cryptocurrencies = React.lazy(
  () => import("components/pages/Cryptocurrencies")
);
const CryptoDetails = React.lazy(
  () => import("components/pages/CryptoDetails")
);

type RoutePropsTypes = {
  name: string;
  path: string;
  component: React.FC<any | null>;
  exact: boolean;
};

const RouteProps: RoutePropsTypes[] = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    name: "Exchanges",
    path: "/exchanges",
    component: Exchanges,
    exact: true,
  },
  {
    name: "Cryptocurrencies",
    path: "/cryptocurrencies",
    component: Cryptocurrencies,
    exact: true,
  },
  {
    name: "News",
    path: "/news",
    component: News,
    exact: true,
  },
  {
    name: "CryptoDetails",
    path: "/crypto/:coinId",
    component: CryptoDetails,
    exact: true,
  },
];

const RouteConfig: React.FC = (): JSX.Element => {
  const mappedRoutes = RouteProps.map((route) => (
    <Route key={route.name} {...route} />
  ));
  return <Switch>{mappedRoutes}</Switch>;
};

export default RouteConfig;
