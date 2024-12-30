"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/my-invitations" });
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          priority
          className="p-6 rounded-t-lg"
          src="/images/login.png"
          alt="image"
          width={300}
          height={300}
        />

        <div className="px-6 pb-6">
          <button
            onClick={handleSignIn}
            className="font-semibold  bg-gray-700 text-white w-full p-3 m-1 flex flex-row justify-center gap-2 items-center hover:bg-gray-600 duration-100 ease-in-out"
          >
            <FcGoogle />
            Google
          </button>
        </div>
      </div>
    </>
  );
}
