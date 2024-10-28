import { Title } from "@/components";

const templates = [
  {
    templateId: 1,
    templateName: "Template 1",
    description: "Description 1",
    previewImageUrl: "https://via.placeholder.com/150",
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
    previewImageUrl: "https://via.placeholder.com/150",
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
    previewImageUrl: "https://via.placeholder.com/150",
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
  return (
    <div>
      <Title title="Templates" />

      <div className="mb-10 mt-4">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="text-left px-6 py-4">Preview</th>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Description</th>
              <th className="text-left px-6 py-4">Created by</th>
              <th className="text-left px-6 py-4">Created at</th>
              <th className="text-left px-6 py-4">Sections</th>
            </tr>
          </thead>
          <tbody>
            {templates?.map((template) => (
              <tr key={template.templateId} className="border-b">
                <td className="px-6 py-4">
                  <img
                    src={template.previewImageUrl}
                    alt={template.templateName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{template.templateName}</td>
                <td className="px-6 py-4">{template.description}</td>
                <td className="px-6 py-4">{template.createdBy}</td>
                <td className="px-6 py-4">{template.createdAt}</td>
                <td className="px-6 py-4">
                  <ul>
                    {template.sections.map((section) => (
                      <li key={section.sectionId}>
                        {section.sectionName}{" "}
                        {section.requiresImage && (
                          <span className="text-red-500">*</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
