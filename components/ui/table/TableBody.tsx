import Image from "next/image";

interface Props<T> {
  data: T[];
  renderActions?: (item: T) => React.ReactNode;
}

export const TableBody = <T extends Record<string, any>>({
  data,
  renderActions,
}: Props<T>) => {
  return (
    <tbody>
      {data?.map((item, index) => (
        <tr key={index} className="border-b">
          <td className="px-6 py-4">
            <Image
              src={item.previewImageUrl}
              alt={item.templateName}
              className="w-16 h-16 object-cover rounded"
              width={64}
              height={64}
            />
          </td>
          <td className="px-6 py-4">{item.templateName}</td>
          <td className="px-6 py-4">{item.description}</td>
          <td className="px-6 py-4">{item.createdBy}</td>
          <td className="px-6 py-4">{item.createdAt}</td>

          {item.sections && (
            <td className="px-6 py-4">
              <ul>
                {item.sections.map((section: any) => (
                  <li key={section.sectionId}>
                    {section.sectionName}{" "}
                    {section.requiresImage && (
                      <span className="text-red-500">*</span>
                    )}
                  </li>
                ))}
              </ul>
            </td>
          )}
          {renderActions && (
            <td className="px-6 py-4">{renderActions(item)}</td>
          )}
        </tr>
      ))}
    </tbody>
  );
};
