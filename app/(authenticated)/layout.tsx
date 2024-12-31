import { auth } from "@/auth.config";
import { Navbar } from "@/components/ui/navbar/Navbar";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import { redirect } from "next/navigation";

// Cambia esta metadata a datos dinámicos según el usuario
export const metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="h-screen flex">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <div className="w-full">
          <Navbar />
        </div>

        <div className="flex-1 p-0 sm:p-4 overflow-y-auto">{children}</div>
      </div>
    </main>
  );
}
