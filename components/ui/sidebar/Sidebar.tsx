"use client";

import { useSidebarStore } from "@/store";
import { SidebarItem } from "./SidebarItem";
import { userRoutes, superadminRoutes } from "@/routes";

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);

  // ! TODO: validate user role and show only the right options
  const options = superadminRoutes;

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
            options.map((option, index) => (
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
