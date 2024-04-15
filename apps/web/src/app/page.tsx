"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ROUTES } from "../../types/routes.enum";

export default function Home() {
  const { status } = useSession();
  if (status === "unauthenticated") {
    redirect(ROUTES.SIGN_IN);
  }

  return <></>;
}
