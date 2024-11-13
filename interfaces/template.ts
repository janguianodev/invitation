export interface TemplateI {
  id: number;
  templateName: string;
  description: string;
  templateSections: TemplateSectionI[];
  templateImage: string;
}

export interface TemplateSectionI {
  id: number;
  sectionName: string;
  requiresImage: boolean;
}

export interface TemplateImageI {
  id: number;
  imageUrl: string;
}
