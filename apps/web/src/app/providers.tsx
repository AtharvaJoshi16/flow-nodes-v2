"use client";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ROUTES } from "../../types/routes.enum";
import { Header } from "./components/header/Header";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <SessionProvider>
      {path !== ROUTES.SIGN_IN && <Header />}
      {children}
    </SessionProvider>
  );
};
