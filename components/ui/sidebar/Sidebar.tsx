"use client";

import { useSidebarStore } from "@/store";
import { SidebarItem } from "./SidebarItem";
import { superadminRoutes, userRoutes } from "@/routes";
import { useSession } from "next-auth/react";
import { roleTypes } from "@prisma/client";

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const { data: session } = useSession();

  const routes =
    session?.user.role === roleTypes.super_admin
      ? superadminRoutes
      : userRoutes;

  return (
    <div
      className={`h-screen bg-secondary text-white flex flex-col transition-width duration-200 ${
        !isSidebarOpen ? "w-0" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-14 bg-secondary">
        <h1 className="text-xl font-semibold">Logo</h1>
      </div>

      <nav>
        <ul>
          {isSidebarOpen &&
            routes.map((option, index) => (
              <SidebarItem
                key={index}
                icon={option.icon}
                path={option.path}
                label={option.label}
              />
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
