import React from "react";
import { Card, Row, Col, Typography, Select, Avatar } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import { fetchNews } from "redux/actions";
import Spinner from "components/layouts/Spinner";

type Props = {
  isSimplified: boolean;
};

const News: React.FC<Props> = ({ isSimplified }): JSX.Element => {
  const [newsLoading, setNewsLoading] = React.useState<boolean>(true);
  const [news, setNews] = React.useState<any>([]);
  const [newsError, setNewsError] = React.useState<string | null>(null);

  const setNewsData = React.useCallback(() => {
    fetchNews()
      .then((res: any) => {
        console.log(res);
        isSimplified
          ? setNews([...res.data.value].slice(0, 6))
          : setNews([...res.data.value]);
      })
      .catch((err) => {
        console.log(err.message);
        setNewsError(err.message);
      })
      .finally(() => setNewsLoading(false));
  }, [isSimplified]);

  React.useEffect(() => {
    setNewsData();
  }, [setNewsData]);

  if (newsLoading) return <Spinner />;

  return (
    <Row gutter={[32, 32]} className='crypto-card-container'>
      {!isSimplified && (
        <Col span={24}>
          <Select
            size='large'
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='value'
            onChange={(v) => console.log(v)}
            filterOption={(input, option) =>
              option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          ></Select>
        </Col>
      )}
      {!newsLoading && newsError ? (
        <div>{newsError}</div>
      ) : (
        news?.map((nw: any, key: any) => (
          <Col xs={24} sm={12} lg={8} key={key}>
            <Card className='news-card' hoverable>
              <Link to={{ pathname: nw.url }} target='_blank'>
                <div className='news-image-container'>
                  <Typography.Title className='news-title' level={4}>
                    {nw.name}
                  </Typography.Title>
                  <img
                    src={nw?.image?.thumbnail?.contentUrl}
                    alt='trackripto-news'
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                  />
                </div>
                <p>
                  {nw?.description > 100
                    ? `${nw.description.substring(0, 100)}...`
                    : nw.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar
                      src={nw?.provider[0]?.image?.thumbnail?.contentUrl}
                    />
                    <Typography.Text className='provider-name'>
                      {nw?.provider[0]?.name}
                    </Typography.Text>
                  </div>
                  <Typography.Text>
                    {moment(nw.datePublished).startOf("s").fromNow()}
                  </Typography.Text>
                </div>
              </Link>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default News;
