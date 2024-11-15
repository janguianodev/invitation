import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user?.email) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
