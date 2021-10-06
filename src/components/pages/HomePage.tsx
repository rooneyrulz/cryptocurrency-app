import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { fetchCoins } from "redux/actions";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Spinner from "components/layouts/Spinner";

const HomePage: React.FC = (): JSX.Element => {
  const [coinsLoading, setCoinsLoading] = React.useState<boolean>(true);
  const [coins, setCoins] = React.useState<any>({});
  const [coinsError, setCoinsError] = React.useState<string | null>(null);

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
  }, []);

  if (coinsLoading) return <Spinner />;

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
              value={
                coinsLoading ? "..." : millify(coins?.data?.stats?.total ?? 0)
              }
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Exchanges'
              value={
                coinsLoading
                  ? "..."
                  : millify(coins?.data?.stats?.totalExchanges ?? 0)
              }
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Market Cap'
              value={
                coinsLoading
                  ? "..."
                  : millify(coins?.data?.stats?.totalMarketCap ?? 0)
              }
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total 24h Volume'
              value={
                coinsLoading
                  ? "..."
                  : millify(coins?.data?.stats?.total24hVolume ?? 0)
              }
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Total Markets'
              value={
                coinsLoading
                  ? "..."
                  : millify(coins?.data?.stats?.totalMarkets ?? 0)
              }
            />
          </Col>
        </Row>
      )}
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies isSimplified />
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Typography.Title>
      </div>
      <News isSimplified />
    </>
  );
};

export default HomePage;
