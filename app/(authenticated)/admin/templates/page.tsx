import { Table, Title } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { IoPencil } from "react-icons/io5";

const templates = [
  {
    templateId: 1,
    templateName: "Template 1",
    description: "Description 1",
    previewImageUrl: "https://placehold.co/150/png",
    createdAt: "2021-09-01T00:00:00.000Z",
    createdBy: "User 1",
    sections: [
      {
        sectionId: 1,
        sectionName: "Section 1",
        requiresImage: true,
      },
      {
        sectionId: 2,
        sectionName: "Section 2",
        requiresImage: false,
      },
    ],
  },
  {
    templateId: 2,
    templateName: "Template 2",
    description: "Description 2",
    previewImageUrl: "https://placehold.co/150/png",
    createdAt: "2021-09-01T00:00:00.000Z",
    createdBy: "User 2",
    sections: [
      {
        sectionId: 1,
        sectionName: "Section 1",
        requiresImage: true,
      },
      {
        sectionId: 2,
        sectionName: "Section 2",
        requiresImage: false,
      },
    ],
  },
  {
    templateId: 3,
    templateName: "Template 3",
    description: "Description 3",
    previewImageUrl: "https://placehold.co/150/png",
    createdAt: "2021-09-01T00:00:00.000Z",
    createdBy: "User 3",
    sections: [
      {
        sectionId: 1,
        sectionName: "Section 1",
        requiresImage: true,
      },
      {
        sectionId: 2,
        sectionName: "Section 2",
        requiresImage: false,
      },
    ],
  },
];

export default function TemplatesPage() {
  const headers = [
    "Preview image",
    "Name",
    "Description",
    "Created by",
    "Created at",
    "Sections",
    "Actions",
  ];

  const renderActions = <T extends Record<string, any>>(item: T) => {
    return (
      <div className="flex space-x-2">
        <Link
          href={`/admin/templates/${item.templateId}`}
          className="btn-primary"
        >
          <IoPencil size={20} />
        </Link>
        <Link
          href={`/admin/templates/${item.templateId}/delete`}
          className="btn-primary"
        >
          Delete
        </Link>
      </div>
    );
  };

  return (
    <div>
      <Title title="Templates" />

      <div className="flex justify-end mb-5">
        <Link href="/admin/templates/new" className="btn-primary">
          Add new template
        </Link>
      </div>

      <div className="mb-10 mt-4">
        <Table
          data={templates}
          headers={headers}
          renderActions={(item) => renderActions(item)}
        />
      </div>
    </div>
  );
}
