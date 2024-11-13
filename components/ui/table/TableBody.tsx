import { ReactNode } from "react";

interface Props<T> {
  columns: Record<
    string,
    {
      getter: (data: T) => ReactNode | string | undefined;
    }
  >;
  payload: T[];
  renderActions?: (item: T) => ReactNode;
}

export const TableBody = <T,>({
  columns,
  payload,
  renderActions,
}: Props<T>) => (
  <tbody>
    {payload.map((rowData, index) => (
      <tr key={index} className="border-b border-gray-300">
        {Object.keys(columns).map((key) => {
          const { getter } = columns[key];
          return (
            <td key={key} className="py-2 px-4">
              {getter(rowData)}
            </td>
          );
        })}
        {renderActions && (
          <td className="py-2 px-4">{renderActions(rowData)}</td>
        )}
      </tr>
    ))}
  </tbody>
);
