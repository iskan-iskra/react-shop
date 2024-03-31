import { SCREEN_SIZES } from "@const";
import { IUseBreakPoint } from "@types";
import { useState, useEffect } from "react";

export default function (): IUseBreakPoint {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SIZES.SCREEN_SM,
    isScreenMd: width >= SCREEN_SIZES.SCREEN_MD,
    isScreenLg: width >= SCREEN_SIZES.SCREEN_LG,
    isScreenXl: width >= SCREEN_SIZES.SCREEN_XL,
    isScreenXxl: width >= SCREEN_SIZES.SCREEN_XXL,
  };
}
