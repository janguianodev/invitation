"use client";

import { deleteTemplate } from "@/actions";
import { Modal } from "@/components";
import React from "react";
import { IoTrash } from "react-icons/io5";
import { DeleteModalContent } from "./DeleteModalContent";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";

interface Props {
  data: {
    templateId: number;
    templateName: string;
  };
}

export const DeleteTemplate = ({ data }: Props) => {
  const { templateId, templateName } = data;
  const { showAlert } = useAlert();

  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onDelete = async () => {
    const { message, success } = await deleteTemplate(templateId);

    if (!success) {
      showAlert(AlertVariant.ERROR, message);
      return;
    }

    showAlert(AlertVariant.SUCCESS, message);
    closeModal();
  };

  return (
    <>
      <div className="text-gray-500 hover:text-red-600">
        {" "}
        <IoTrash size={20} onClick={openModal} />
      </div>
      {isOpen && (
        <Modal modalTitle="Eliminar Template" closeModal={closeModal}>
          <DeleteModalContent
            templateName={templateName}
            closeModal={closeModal}
            onDelete={onDelete}
          />
        </Modal>
      )}
    </>
  );
};
