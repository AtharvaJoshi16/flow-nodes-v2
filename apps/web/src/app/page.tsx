"use client";
import { NewBlankCanvasCard } from "@flownodes/ui/new-canvas-card";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { v4 } from "uuid";
import { ROUTES } from "../../types/routes.enum";
import { useReactResponsive } from "./hooks/useReactResponsive";

export default function Home() {
  const { status } = useSession();
  const { isPhone, isTablet, isDesktop, isDesktopLarge } = useReactResponsive();
  const blankCanvasId = v4().substring(0, 8);
  const router = useRouter();
  const classes = classNames("m-[30px] grid gap-5", {
    "grid-cols-1": isPhone,
    "grid-cols-2": isTablet,
    "grid-cols-3": isDesktop,
    "grid-cols-4": isDesktopLarge,
  });

  if (status === "unauthenticated") {
    redirect(ROUTES.SIGN_IN);
  }

  return (
    <div className={classes}>
      <NewBlankCanvasCard
        onClick={() => router.push(`${ROUTES.CANVAS}/${blankCanvasId}`)}
      />
    </div>
  );
}
