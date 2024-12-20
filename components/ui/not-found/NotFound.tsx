export const NotFound = () => {
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-invitation-secondary">
          Oops!
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4 text-center">
          Invitación no encontrada
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Lo sentimos, no encontramos la invitación que buscas. Por favor,
          contacta a los novios para obtener ayuda.
        </p>
      </div>
    </div>
  );
};
