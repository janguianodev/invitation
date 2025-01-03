import { ReactNode } from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

interface Props<T extends object> {
  columns: Record<
    string,
    {
      name: string;
      width: string;
      getter: (data: T) => ReactNode | string | undefined; //getter function
    }
  >;
  payload: T[];
  renderActions?: (item: T) => ReactNode;
}

export const Table = <T extends object>({ columns, payload }: Props<T>) => {
  return (
    <div className="w-full overflow-x-auto shadow-md">
      <table className="w-full text-left border border-gray-300">
        <TableHeader columns={columns} />
        <TableBody columns={columns} payload={payload} />
      </table>
    </div>
  );
};
