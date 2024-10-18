import React from "react";

export const ConfirmAssitance = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-center text-black">¿Cuántas personas asistirán?</p>
          <p className="text-center text-black text-md">
            Tienes <span className="font-semibold text-secondary">2</span> pases
            disponibles
          </p>
        </div>
        <div>
          <select
            className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
            aria-label="Default select example"
          >
            <option value="0">Selecciona</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-3 mt-3">
        <button className="bg-secondary text-white px-2 py-1 rounded">
          Confirmar
        </button>
      </div>
    </div>
  );
};
