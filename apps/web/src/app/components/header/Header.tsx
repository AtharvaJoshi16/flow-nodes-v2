"use client";
import { useReactResponsive } from "@/app/hooks/useReactResponsive";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const { data, status } = useSession();
  const [canvasName, setCanvasName] = useState("Untitled");
  const { isPhone, isTablet } = useReactResponsive();
  const path = usePathname();
  return !isPhone && !isTablet ? (
    <HeaderDesktop
      path={path}
      data={data}
      status={status}
      canvasName={canvasName}
      setCanvasName={setCanvasName}
    />
  ) : (
    <HeaderMobile
      path={path}
      data={data}
      status={status}
      canvasName={canvasName}
      setCanvasName={setCanvasName}
    />
  );
};
