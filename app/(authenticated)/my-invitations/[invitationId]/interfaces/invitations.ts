export interface InvitationSectionsI {
  id: number;
  requiresImage: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  templateId: number;
  sectionTypeId: number;
  sectionType: SectionType;
}

export interface SectionType {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
