import { ReactNode } from "react";

interface Props<T> {
  columns: Record<
    string,
    {
      name: string;
      width: string;
    }
  >;
  renderActions?: (item: T) => ReactNode;
}

export const TableHeader = <T,>({ columns, renderActions }: Props<T>) => (
  <thead className="bg-gray-200">
    <tr>
      {Object.keys(columns).map((key) => {
        const { name, width } = columns[key];
        return (
          <th
            key={key}
            style={{ width }}
            className="py-2 px-4 font-semibold border-b border-gray-300"
          >
            {name}
          </th>
        );
      })}
      {renderActions && (
        <th className="py-2 px-4 font-semibold border-b border-gray-300">
          Actions
        </th>
      )}
    </tr>
  </thead>
);
