import { IoClose } from "react-icons/io5"; // Asegúrate de tener react-icons instalado

interface Props {
  closeModal: () => void;
  modalTitle: string;
  children: React.ReactNode;
}

export const Modal = ({ children, closeModal, modalTitle }: Props) => {
  return (
    <div
      className={` fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50`}
    >
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-sm w-full relative overflow-y-auto">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={closeModal}
        >
          <IoClose className="w-6 h-6" />
        </button>

        {/* Modal title */}
        <div className="text-center mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-700">
            {modalTitle}
          </h2>
          <hr className="border-t border-gray-200 mt-2" />
        </div>

        {/* Modal content */}
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};
