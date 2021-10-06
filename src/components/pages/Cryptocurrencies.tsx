import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { fetchCoins } from "redux/actions";
import Spinner from "components/layouts/Spinner";

type Props = {
  isSimplified: boolean;
};

const Cryptocurrencies: React.FC<Props> = ({ isSimplified }): JSX.Element => {
  const [coinsLoading, setCoinsLoading] = React.useState<boolean>(true);
  const [coins, setCoins] = React.useState<any>([]);
  const [coinsError, setCoinsError] = React.useState<string | null>(null);

  const setCoinsData = React.useCallback(() => {
    fetchCoins()
      .then((res: any) => {
        isSimplified
          ? setCoins([...res.data.data.coins].slice(0, 10))
          : setCoins([...res.data.data.coins]);
      })
      .catch((err) => {
        console.log(err.message);
        setCoinsError(err.message);
      })
      .finally(() => setCoinsLoading(false));
  }, [isSimplified]);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim()) {
      const filteredData = coins?.filter((coin: any) =>
        coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setCoins([...filteredData]);
    } else {
      setCoinsData();
    }
  };

  React.useEffect(() => {
    setCoinsData();
  }, [setCoinsData]);

  if (coinsLoading) return <Spinner />;

  return (
    <>
      {!isSimplified && (
        <div className='search-crypto'>
          <Input
            placeholder='Search Cryptocurrency'
            onChange={(e) => onHandleChange(e)}
            size='large'
          />
        </div>
      )}

      <Row gutter={[32, 32]} className='crypto-card-container'>
        {!coinsLoading && coinsError ? (
          <div>{coinsError}</div>
        ) : (
          coins?.map((currency: any) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className='crypto-card'
              key={currency.id}
            >
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img
                      className='crypto-image'
                      src={currency?.iconUrl ?? ""}
                      alt='currency-icon'
                    />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency?.price ?? "")}</p>
                  <p>Market Cap: {millify(currency?.marketCap ?? "")}</p>
                  <p>Daily Change: {millify(currency?.change ?? "")}%</p>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
