"use client";
import { Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ROUTES } from "../../types/routes.enum";

export default function Home() {
  const { status } = useSession();
  if (status === "unauthenticated") {
    redirect(ROUTES.SIGN_IN);
  }
  return (
    <>
      <Button onClick={() => signOut()} variant="outlined" color="error">
        Logout
      </Button>
    </>
  );
}
