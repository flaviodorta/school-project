import { SiderTheme } from "antd/es/layout/Sider";
import { atom } from "jotai";

export const themeAtom = atom<SiderTheme>("dark");

export const canCollapseSidebarAtom = atom(false);

interface IUser {
  loggedIn: boolean;
  role: "admin" | "worker" | "teacher" | "student";
}

export const userAtom = atom<IUser>({
  loggedIn: false,
  role: "student",
});
