import Sider from "antd/es/layout/Sider";
import { Button, Menu, MenuProps } from "antd";
import { canCollapseSidebarAtom, themeAtom } from "../../jotai/atoms";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import {
  FaGraduationCap,
  FaDollarSign,
  FaPhone,
  FaArrowDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Secretariassssssssss", "/secretary", <FaPhone />, [
    getItem("Início", "/home"),
    getItem("Funcionários", "/workers"),
    getItem("Alunos", "/students"),
    getItem("Professores", "/teachers"),
    getItem("Atendimento", "/service"),
  ]),

  getItem("Acadêmico", "/academic", <FaGraduationCap />, [
    getItem("Inicío", "/home"),
    getItem("Quadro de Horários", "/timesheet"),
    getItem("Ensino a Distância", "/ead"),
  ]),

  getItem("Financeiro", "/financial", <FaDollarSign />, []),
];

const Sidebar = () => {
  const [theme] = useAtom(themeAtom);
  const canCollapseSidebar = useAtomValue(canCollapseSidebarAtom);
  const navigate = useNavigate();

  return (
    <Sider
      collapsed={canCollapseSidebar}
      // onCollapse={(value) => setCollapsed(value)}
      style={{
        background: "white",
      }}
      theme={theme}
      breakpoint="md"

      // collapsedWidth={0}
    >
      <Menu
        onClick={({ keyPath }) => navigate(keyPath[1] + keyPath[0])}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
