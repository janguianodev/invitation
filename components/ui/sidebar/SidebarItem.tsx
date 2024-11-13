"use client";

import { useSidebarStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export const SidebarItem = ({ icon, label, path }: Props) => {
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);
  const pathName = usePathname();

  return (
    <Link href={path} onClick={closeSidebar}>
      <li
        className={`flex gap-4 p-4 hover:bg-gray-500 w-full ${
          pathName === path ? "bg-primary text-gray-800" : ""
        }`}
      >
        {icon}
        <span className="capitalize">{label}</span>
      </li>
    </Link>
  );
};
