import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/sign-in");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center text-[#333] sm:text-6xl">
        Invitaciones electrónicas para tu boda
      </h1>
      <p>
        Entra a nuestro catálogo de plantillas de invitaciones electrónicas para
        tu boda y elige la que será la invitación perfecta para tu boda.
      </p>
    </div>
  );
}
