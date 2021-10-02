import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import HomePage from "components/pages/HomePage";
import Exchanges from "components/pages/Exchanges";
import Cryptocurrencies from "components/pages/Cryptocurrencies";
import News from "components/pages/News";
import CryptoDetails from "components/pages/CryptoDetails";

type RoutePropsTypes = {
  name: string;
  path: string;
  component: React.FC;
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
