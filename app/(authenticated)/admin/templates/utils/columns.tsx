import { TemplatesI } from "@/interfaces";
import Image from "next/image";
import { renderActions } from "./actions";

export const columns = {
  previewImage: {
    name: "Imagen",
    width: "15%",
    getter: (item: TemplatesI) => (
      <Image
        src={item.previewImageUrl}
        alt={item.templateName}
        width={80}
        height={80}
        style={{ width: "auto", height: "auto" }}
      />
    ),
  },
  name: {
    name: "Nombre",
    width: "20%",
    getter: (item: TemplatesI) => item.templateName,
  },
  description: {
    name: "Descripción",
    width: "25%",
    getter: (item: TemplatesI) => item.description,
  },
  createdBy: {
    name: "Creada por",
    width: "15%",
    getter: (item: TemplatesI) =>
      `${item.createdBy.firstName || ""} ${item.createdBy.lastName || ""}`,
  },
  createdAt: {
    name: "Creada el",
    width: "10%",
    getter: (item: TemplatesI) => new Date(item.createdAt).toLocaleDateString(),
  },
  sections: {
    name: "Secciones",
    width: "15%",
    getter: (item: TemplatesI) =>
      item.sections.map((section) => section.description).join(", "),
  },
  actions: {
    name: "Acciones",
    width: "10%",
    getter: (item: TemplatesI) => renderActions(item),
  },
};
