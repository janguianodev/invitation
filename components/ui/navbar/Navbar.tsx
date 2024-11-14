"use client";

import { useSidebarStore } from "@/store";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import { IoLogOutOutline, IoMenu } from "react-icons/io5";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

export const Navbar = () => {
  const { data: session } = useSession();
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
      <p className="text-center text-white w-full ">
        Welcome, {session?.user?.name}
      </p>
      <div />
      <button onClick={() => signOut()}>
        <IoLogOutOutline size={30} />
      </button>
    </div>
  );
};
