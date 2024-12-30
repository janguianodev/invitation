import "./globals.css";
import { robotoFont } from "@/fonts";
import { Providers } from "@/components";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Invitation",
    default: "Wedding Invitation",
  },
  description: "Electronic invitation for your wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} antialiased`}>
        <SessionProvider>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
