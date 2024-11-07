import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

interface Props<T> {
  headers: string[];
  data: T[];
  renderActions?: (item: T) => React.ReactNode;
}

export const Table = <T extends Record<string, any>>({
  headers,
  data,
  renderActions,
}: Props<T>) => {
  return (
    <table className="w-full table-auto">
      <TableHead headers={headers} />
      <TableBody data={data} renderActions={renderActions} />
    </table>
  );
};
