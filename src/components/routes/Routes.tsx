import React from "react";
import { Layout } from "antd";
import RouteConfig from "./RouteConfig";

const Routes: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <div className='routes'>
        <RouteConfig />
      </div>
    </Layout>
  );
};

export default Routes;
