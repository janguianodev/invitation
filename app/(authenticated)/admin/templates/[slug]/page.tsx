import { Title } from "@/components";
import { AddEditTemplate } from "./components/AddEditTemplate";
import { getTemplateById } from "@/actions";
import { redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = params;

  const template = await getTemplateById(slug);

  if (!template && slug !== "new") {
    redirect("/admin/templates");
  }

  const title = slug === "new" ? "Crear plantilla" : "Editar plantilla";

  return (
    <div>
      <Title title={title} />

      <div className="bg-white rounded p-4">
        <AddEditTemplate template={template ?? {}} slug={slug} />
      </div>
    </div>
  );
}
