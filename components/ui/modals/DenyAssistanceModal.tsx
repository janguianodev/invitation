import { template1Font } from "@/fonts";
import React from "react";

export const DenyAssistance = () => {
  return (
    <div className={`${template1Font.className}`}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-center text-md">
            ¡Es una pena que no puedas asistir a este día tan especial!
          </p>
          <p className="text-center text-xs">
            Puedes dejarnos un mensaje si así lo deseas. (opcional)
          </p>
        </div>
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-secondary focus:border-transparent"
          placeholder="Escribe aquí tu mensaje"
        />
      </div>
      <div className="flex flex-row justify-end gap-3 mt-3">
        <button className="bg-custom-secondary text-white px-2 py-1 rounded">
          Enviar respuesta
        </button>
      </div>
    </div>
  );
};
