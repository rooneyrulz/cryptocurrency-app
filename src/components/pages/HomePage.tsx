import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage: React.FC = (): JSX.Element => {
  const [coinsLoading, setCoinsLoading] = React.useState<boolean>(true);
  const [coins, setCoins] = React.useState<any>({});
  const [coinsError, setCoinsError] = React.useState<string | null>(null);

  const fetchCoins = React.useCallback(async () => {
    const config = {
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "a312e590d3mshc33cdd642cd7523p186fedjsnd80b69a508d6",
      },
    };
    try {
      const res = await axios.get(
        "https://coinranking1.p.rapidapi.com/coins",
        config
      );
      return res;
    } catch (error) {
      throw error;
    }
  }, []);

  React.useEffect(() => {
    fetchCoins()
      .then((res: any) => {
        setCoins({ ...res.data });
      })
      .catch((err) => {
        console.log(err.message);
        setCoinsError(err.message);
      })
      .finally(() => setCoinsLoading(false));
  }, [fetchCoins]);

  return (
    <>
      <Typography.Title level={2} className='heading'>
        Global Crypto Stats
      </Typography.Title>
      {!coinsLoading && coinsError ? (
        <div>{coinsError}</div>
      ) : (
        <Row>
          <Col span={12}>
            <Statistic
              title='Total Cryptocurrencies'
              value={coinsLoading ? "..." : coins?.data?.stats?.total ?? 0}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Exchanges'
              value={
                coinsLoading ? "..." : coins?.data?.stats?.totalExchanges ?? 0
              }
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Market Cap'
              value={
                coinsLoading ? "..." : coins?.data?.stats?.totalMarketCap ?? 0
              }
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total 24h Volume'
              value={
                coinsLoading ? "..." : coins?.data?.stats?.total24hVolume ?? 0
              }
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Markets'
              value={
                coinsLoading ? "..." : coins?.data?.stats?.totalMarkets ?? 0
              }
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default HomePage;
