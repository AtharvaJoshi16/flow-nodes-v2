import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "reactflow/dist/style.css";
import "./globals.css";
import { ClientProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flow Nodes",
  description: "Generated your own roadmaps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
