import { Content as LayoutContent } from "antd/es/layout/layout";

interface IProps {
  children: React.ReactNode;
}

const contentStyle: React.CSSProperties = {
  padding: "3.2rem",
  minHeight: "100%",
};

const Content = (props: IProps) => {
  return <LayoutContent style={contentStyle}>{props.children}</LayoutContent>;
};

export default Content;
