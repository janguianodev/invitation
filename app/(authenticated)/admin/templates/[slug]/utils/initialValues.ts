import { AddEditTemplateFormI } from "@/interfaces";

export const initialValues: AddEditTemplateFormI = {
  templateName: "",
  description: "",
  image: {
    id: 0,
    imageUrl: "",
  },
  templateSections: [],
};
