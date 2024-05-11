"use client";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { ROUTES } from "../../types/routes.enum";
import { Header } from "./components/header/Header";
import { store } from "./redux/store";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <SessionProvider>
      <Provider store={store}>
        {path !== ROUTES.SIGN_IN && <Header />}
        {children}
      </Provider>
    </SessionProvider>
  );
};
