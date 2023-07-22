import { Col, Row } from "antd";
import Content from "../UI/Content";

const StudentsContent = () => {
  return (
    <Content>
      <Row gutter={[16, 16]}>
        <Col span={6}></Col>
        <Col span={6}></Col>
        <Col span={6}></Col>
      </Row>
    </Content>
  );
};

export default StudentsContent;
