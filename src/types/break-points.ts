export type TiScreenSizes = {
  SCREEN_SM: number;
  SCREEN_MD: number;
  SCREEN_LG: number;
  SCREEN_XL: number;
  SCREEN_XXL: number;
};
export interface IUseBreakPoint {
  width: number;
  isScreenSm: boolean;
  isScreenMd: boolean;
  isScreenLg: boolean;
  isScreenXl: boolean;
  isScreenXxl: boolean;
}
