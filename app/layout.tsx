import type { Metadata } from "next";
import "./globals.css";
import { robotoFont } from "@/fonts";
import ColorInitializer from "@/components/ui/color-initializer/ColorInitializer";

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
      <body className={`${robotoFont.className} antialiased`}>
        <ColorInitializer />
        {children}
      </body>
    </html>
  );
}
