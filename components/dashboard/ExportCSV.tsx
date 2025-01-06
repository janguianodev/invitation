"use client";
import Papa from "papaparse";

type ExportType = {
  groupName: string;
  phoneNumber: string;
  invited: string;
  confirmed: number;
  confirmationCode: string;
  guests: string;
};
interface ExportCSVProps {
  data: ExportType[];
}

export const ExportCSV: React.FC<ExportCSVProps> = ({ data }) => {
  const handleExportToCSV = () => {
    const csvRows = [
      [
        "Grupo",
        "Teléfono",
        "Invitados",
        "Confirmados",
        "Código",
        "Nombre Invitados",
      ],
    ];
    data.forEach((group) => {
      csvRows.push([
        group.groupName,
        group.phoneNumber,
        group.invited,
        group.confirmed.toString(),
        group.confirmationCode,
        group.guests,
      ]);
    });

    const csvString = Papa.unparse(csvRows);

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Invitados.csv";
    link.click();
  };

  return (
    <button className="btn btn-primary" onClick={handleExportToCSV}>
      Exportar a CSV
    </button>
  );
};
