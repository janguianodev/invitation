import React from "react";

interface Props {
  templateName: string;
  closeModal: () => void;
  onDelete: () => Promise<void>;
}

export const DeleteModalContent = ({
  templateName,
  closeModal,
  onDelete,
}: Props) => {
  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-lg text-gray-800">
        ¿Estás seguro de que deseas eliminar <b>{templateName}</b>?
      </h2>
      <div className="flex justify-end gap-5 mt-5">
        <button onClick={closeModal}>Cancelar</button>
        <button className="btn-primary" onClick={onDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};
