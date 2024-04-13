import { useMediaQuery } from "react-responsive";

export const useReactResponsive = () => {
  const isPhone = useMediaQuery({ minWidth: 360, maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isDesktopLarge = useMediaQuery({ minWidth: 1440 });

  return {
    isPhone,
    isDesktop,
    isTablet,
    isDesktopLarge,
  };
};
