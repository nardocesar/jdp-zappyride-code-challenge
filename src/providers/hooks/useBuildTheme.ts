import { customTheme } from "styles/theme";

export type PageTheme = typeof customTheme;

export const useBuildTheme = (config: PageTheme) => ({
  ...config,
});
