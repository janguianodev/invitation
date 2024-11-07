interface Props {
  headers: string[];
}

export const TableHead = ({ headers }: Props) => {
  return (
    <thead className="bg-gray-200 border-b">
      <tr>
        {headers.map((header) => (
          <th className="text-left px-6 py-4">{header}</th>
        ))}
      </tr>
    </thead>
  );
};
