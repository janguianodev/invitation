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
    <div className="flex flex-row justify-between items-center bg-secondary p-4 text-gray-700">
      <div className="flex items-center">
        {!isSidebarOpen ? (
          <button onClick={openSidebar}>
            <IoMenu className="text-2xl text-gray-700" />
          </button>
        ) : (
          <button onClick={closeSidebar}>
            <TbLayoutSidebarLeftCollapseFilled className="text-gray-700 text-2xl" />
          </button>
        )}
      </div>
      <p className="text-center text-gray-700 ">Welcome, user</p>
      <div />
    </div>
  );
};
