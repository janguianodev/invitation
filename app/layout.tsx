import type { Metadata } from "next";
import "./globals.css";
import { prataFont } from "@/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Wedding Invitation",
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
      <body className={`${prataFont.className} antialiased`}>{children}</body>
    </html>
  );
}
