"use client";

import React from "react";
import { GuestI } from "../interfaces/GuestInterface";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";
import { IoTrash } from "react-icons/io5";
import { deleteGuest } from "@/actions";

export const DeleteGuest = ({ guest }: { guest: GuestI }) => {
  const { id } = guest;
  const [isOpen, setIsOpen] = React.useState(false);
  const { showAlert } = useAlert();
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async () => {
    const response = await deleteGuest(id);

    if (!response.ok) {
      showAlert(AlertVariant.ERROR, "Error al eliminar un invitado");

      return;
    }

    showAlert(AlertVariant.SUCCESS, "Invitado eliminado correctamente");
    closeModal();
  };

  return (
    <>
      <div className="text-gray-500 hover:text-red-600">
        <IoTrash size={20} onClick={openModal} />
      </div>

      {/* WIP:  Modal - Change to a simple component */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-[300px]">
            <p className="text-gray-800 mb-4">
              ¿Estás seguro de que deseas eliminar a{" "}
              <strong>{guest.name}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
