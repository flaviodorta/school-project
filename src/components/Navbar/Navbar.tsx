import { Button, Divider, Space, Tooltip } from "antd";
import { Header } from "antd/es/layout/layout";
import { useAtom, useSetAtom } from "jotai";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import { canCollapseSidebarAtom } from "../../jotai/atoms";

const headerStyle: React.CSSProperties = {
  background: "#fafafa",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 2.2rem",
};

const buttonStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Navbar = () => {
  const [canCollapseSidebar, setCanCollapseSidebar] = useAtom(
    canCollapseSidebarAtom
  );

  return (
    <Header style={headerStyle}>
      <Tooltip
        placement="right"
        title={canCollapseSidebar ? "Fechar menu" : "Abrir menu"}
      >
        <Button
          icon={<FaBars />}
          onClick={() => setCanCollapseSidebar((value) => !value)}
          style={buttonStyle}
        />
      </Tooltip>

      <Space size="middle" align="center" style={{ height: "100%" }}>
        <Tooltip title="Notificações">
          <Button shape="circle" icon={<FaBell />} style={buttonStyle} />
        </Tooltip>

        <Tooltip title="">
          <Button shape="circle" icon={<FaUser />} style={buttonStyle} />
        </Tooltip>
      </Space>
    </Header>
  );
};

export default Navbar;
