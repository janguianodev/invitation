import { auth } from "@/auth.config";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return <h1>Unauthorized</h1>;
  }

  return (
    <div className="flex flex-col items-center rounded-lg p-4">
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt="Profile image"
          width={100}
          height={100}
          className="rounded-full"
        />
      ) : (
        <FaUser />
      )}
      <h1 className="text-2xl font-semibold">{session.user.name}</h1>
      <p className="text-gray-500">{session.user.email}</p>
    </div>
  );
}
