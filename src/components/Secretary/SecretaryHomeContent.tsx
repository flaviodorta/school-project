import React from "react";
import Content from "../UI/Content";
import { Card, Col, Row, Statistic } from "antd";

// interface IProps {
//   children: React.ReactNode;
// }

const SecretaryHomeContent: React.FC = () => {
  return (
    <Content>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card style={{ width: "30rem" }}>
            <Statistic title="Alunos" value={678} />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: "30rem" }}>
            <Statistic title="Professores" value={36} />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: "30rem" }}>
            <Statistic title="Funcionários" value={45} />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default SecretaryHomeContent;
