"use client";

import { useSidebarStore } from "@/store";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

export const Navbar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const openSidebar = useSidebarStore((state) => state.openSidebar);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <div className="flex flex-row justify-between items-center bg-secondary p-4 text-white">
      <div className="flex items-center">
        {!isSidebarOpen ? (
          <button onClick={openSidebar}>
            <IoMenu className="text-2xl text-white" />
          </button>
        ) : (
          <button onClick={closeSidebar}>
            <TbLayoutSidebarLeftCollapseFilled className="text-white text-2xl" />
          </button>
        )}
      </div>
      <p className="text-center text-white ">Welcome, user</p>
      <div />
    </div>
  );
};
