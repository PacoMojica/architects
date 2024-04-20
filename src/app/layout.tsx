import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ubuntu, variables } from "@/utils/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mojica Bricks",
  description: "Architecture Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} ${variables}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
