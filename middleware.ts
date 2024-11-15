import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req: Request) {
  const { pathname } = new URL(req.url);

  const publicRoutes = [
    "/_next",
    "/static",
    "/api/auth",
    "/favicon.ico",
    "/auth/sign-in",
    "/images",
  ];

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (pathname === "/auth/sign-in") {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|api/auth|images).*)"],
};
