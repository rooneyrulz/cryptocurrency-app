import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Trackcrypto <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to='/'>Home</Link>
        <Link to='/exchanges'>Exchanges</Link>
        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        <Link to='/news'>News</Link>
      </Space>
    </>
  );
};

export default Footer;
