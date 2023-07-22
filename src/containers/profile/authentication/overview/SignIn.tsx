import { Col, Form, Input, Row } from "antd";
import AuthLayout from "../AuthLayout";
import { useCallback } from "react";

const SignIn: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => null;

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} xs={24}>
        <div className="mt-6 bg-white rounded-md shadow-md w-full h-full">
          <div className="px-5 py-4 text-center border-b border-gray-200">
            <h2 className="mb-0 text-xl font-semibold text-dark">
              Entrar no LearnHub
            </h2>

            <div className="px-10 pt-8 pb-6">
              <Form
                name="login"
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      message: "Please input your username or Email!",
                      required: true,
                    },
                  ]}
                  initialValue="hexadash@dm.com"
                  label="Username or Email Address"
                  className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                >
                  <Input placeholder="name@example.com" />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignIn;
