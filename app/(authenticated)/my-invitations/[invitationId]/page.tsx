import { InvitationSetupForm } from "./components/InvitationSetupForm";

export default function InvitationPage() {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <div className="">
        <h1 className="text-xl">Datos de la invitación</h1>
      </div>

      <div className="bg-white rounded">
        <InvitationSetupForm />
      </div>
    </div>
  );
}
