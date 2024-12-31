import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req: Request) {
  const { pathname } = new URL(req.url);

  // Lista de rutas públicas
  const publicRoutes = [
    "/_next",
    "/static",
    "/api/auth",
    "/favicon.ico",
    "/auth/sign-in",
    "/images",
  ];

  console.log("Middleware invoked for pathname:", pathname);

  // Verificar si la ruta es pública
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    console.log("Public route accessed:", pathname);
    return NextResponse.next();
  }

  if (pathname === "/auth/sign-in") {
    console.log("Sign-in route accessed");
    return NextResponse.next();
  }

  // Obtener el token JWT
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    console.log("No token found, redirecting to /auth/sign-in");
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  console.log("Token found, allowing access to:", pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|api/auth|images).*)"],
};
