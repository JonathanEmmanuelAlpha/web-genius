"use client";

import SideBar from "./ui/SideBar";
import SidebarItem from "./ui/SidebarItem";
import {
  Article,
  EditNote,
  Help,
  PeopleRounded,
  PersonPinCircle,
  Settings,
} from "@mui/icons-material";
import AuthProvider from "@/contexts/AuthProvider";

import { ToastContainer } from "react-toastify";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex relative">
        <SideBar>
          <SidebarItem
            url="/"
            text="Authors requests"
            icon={<PersonPinCircle />}
          />
          <SidebarItem url="authors" text="Authors" icon={<PeopleRounded />} />
          <SidebarItem url="articles" text="Articles" icon={<Article />} />
          <SidebarItem url="creator" text="Ceator" icon={<EditNote />} />
          <hr className="my-3" />
          <SidebarItem url="settings" text="Settings" icon={<Settings />} />
          <SidebarItem url="help" text="Help" icon={<Help />} />
        </SideBar>
        <div className="w-full p-4">{children}</div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  );
}
