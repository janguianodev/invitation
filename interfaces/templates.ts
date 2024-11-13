export interface TemplatesI {
  templateId: number;
  templateName: string;
  description: string;
  previewImageUrl: string;
  createdAt: Date;
  createdBy: CreatedBy;
  sections: Section[];
}

interface CreatedBy {
  id: string;
  firstName: string | null;
  lastName: string | null;
}

interface Section {
  sectionId: number;
  sectionName: string;
  requiresImage: boolean;
  description: string;
}
