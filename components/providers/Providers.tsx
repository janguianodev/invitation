"use clent";

import { AlertProvider } from "@/context";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return <AlertProvider>{children}</AlertProvider>;
};
