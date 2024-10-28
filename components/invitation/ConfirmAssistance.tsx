"use client";

import React, { useState } from "react";
import { Modal } from "../ui/global-modal/GlobalModal";
import { ConfirmAssitance } from "../ui/modals/ConfirmAssitanceModal";
import { DenyAssistance } from "../ui/modals/DenyAssistanceModal";
import { template1Font } from "@/fonts";

export const ConfirmAssistance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmAssistance, setConfirmAssistance] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setConfirmAssistance(false);
  };

  const handleConfirmAssistance = () => setConfirmAssistance(true);
  const handleDenyAssistance = () => setConfirmAssistance(false);

  return (
    <>
      <div
        className={`${template1Font.className} flex justify-center bg-background text-black p-12`}
      >
        <div className="flex flex-col text-center gap-3">
          <p className="text-center text-xl text-custom-secondary">
            Por favor, confirma tu asistencia
          </p>
          <p className="text-center text-xl text-custom-secondary">
            ¡Nos encantaría contar contigo!
          </p>
          <div className="flex flex-col gap-1">
            <button
              className="inline-block px-4 py-3 bg-custom-secondary border-custom-tertiary text-background font-bold text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mt-2"
              onClick={() => {
                handleConfirmAssistance();
                openModal();
              }}
            >
              Confirmar asistencia
            </button>
            <button
              className="inline-block px-4 py-1.5 border-custom-secondary text-custom-secondary font-bold text-xs leading-tight  hover:underline focus:underline active:underline transition duration-150 ease-in-out mt-2"
              onClick={() => {
                handleDenyAssistance();
                openModal();
              }}
            >
              No puedo asistir
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal
          modalTitle={
            confirmAssistance ? "Confirmar Asistencia" : "No podré asistir"
          }
          closeModal={closeModal}
        >
          {confirmAssistance ? <ConfirmAssitance /> : <DenyAssistance />}
        </Modal>
      )}
    </>
  );
};
// I'll manage this in a modal window later
// <select name="asistencia" id="asistencia">
//   <option value="1">1 persona</option>
//   <option value="2">2 personas</option>
// </select>
