import { getTemplates } from "@/actions";
import { Table, Title } from "@/components";
import { TemplatesI } from "@/interfaces";
import Link from "next/link";
import { columns } from "./utils/columns";
import { renderActions } from "./utils/actions";

export default async function TemplatesPage() {
  const allTemplates = await getTemplates();

  return (
    <div>
      <Title title="Templates" />

      <div className="flex justify-end mb-5">
        <Link href="/admin/templates/new" className="btn-primary">
          Crear Template
        </Link>
      </div>

      <div className="mb-10 mt-4">
        {allTemplates.length === 0 ? (
          <p className="text-center text-gray-500 mt-16">
            No hay templates creados
          </p>
        ) : (
          <Table<TemplatesI>
            columns={columns}
            payload={allTemplates}
            renderActions={renderActions}
          />
        )}
      </div>
    </div>
  );
}
