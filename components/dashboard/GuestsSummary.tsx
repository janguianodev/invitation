export const GuestsSummary = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0">
        <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold tracking-tight leading-none text-green-600">
              21
            </div>
            <div className="text-lg text-center font-medium text-green-600">
              Asistirán
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold tracking-tight leading-none text-red-500">
              17
            </div>
            <div className="text-lg text-center font-medium text-red-600">
              No asistirán
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold tracking-tight leading-none text-amber-500">
              24
            </div>
            <div className="text-lg text-center font-medium text-amber-600">
              Pendientes
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold tracking-tight leading-none text-blue-500">
              38
            </div>
            <div className="text-lg text-center font-medium text-blue-500">
              Total
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
