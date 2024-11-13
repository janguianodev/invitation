import { TemplatesI } from "@/interfaces";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { DeleteTemplate } from "../components/DeleteTemplate";

export const renderActions = (item: TemplatesI) => {
  return (
    <>
      <div className="flex space-x-2">
        <Link
          href={`/admin/templates/${item.templateId}`}
          className="text-gray-500 hover:text-blue-600"
        >
          <MdModeEdit size={20} />
        </Link>
        <DeleteTemplate
          data={{
            templateId: item.templateId,
            templateName: item.templateName,
          }}
        />
      </div>
    </>
  );
};
