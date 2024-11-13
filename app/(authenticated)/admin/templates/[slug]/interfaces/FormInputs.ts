export interface FormInputs {
  templateName: string;
  description: string;
  templateImage: FileList;
  templateSections: Section[];
}

export interface Section {
  id?: number;
  sectionName: string;
  requiresImage: boolean;
}
