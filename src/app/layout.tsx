import type { Metadata } from "next";
import "./globals.scss";
import MatrixHeader from "../components/MatrixHeader";
import "../components/MatrixHeader.module.scss";



export const metadata: Metadata = {
  title: "The Karl Brown",
  description: "My Professional Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MatrixHeader />
        {children}
      </body>
    </html>
  );
}
