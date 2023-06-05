import { Button, message } from "antd";
import { Fragment } from "react";
const ActionLoading = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Action in progress..",
        duration: 2.5,
      })
      .then(() => message.success("Loading finished", 2.5))
      .then(() => message.info("Loading finished", 2.5));
  };
  return (
    <Fragment>
      {contextHolder}
      <Button onClick={success}>Display sequential messages</Button>
    </Fragment>
  );
};
export default ActionLoading;
