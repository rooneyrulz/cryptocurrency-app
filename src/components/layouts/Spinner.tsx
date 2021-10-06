import React from "react";
import { Spin, Space } from "antd";

const Spinner: React.FC = (): JSX.Element => {
  const useStyles = {
    spinnerWrapper: {
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <div style={useStyles.spinnerWrapper}>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  );
};

export default Spinner;
