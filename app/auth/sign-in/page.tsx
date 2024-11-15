import SignUpForm from "@/components/ui/auth/login/SignUpForm";

export default function SignIn() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-blue-800">
      <div className="space-y-6 text-center text-white">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Ingresar
        </h1>
        <SignUpForm />
      </div>
    </main>
  );
}
