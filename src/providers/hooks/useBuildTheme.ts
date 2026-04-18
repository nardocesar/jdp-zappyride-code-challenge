import { customTheme } from "styles/theme";
import type { PageConfigType } from "types";

export type PageTheme = typeof customTheme;

export const useBuildTheme = (config: PageConfigType): PageTheme => ({
  page: {
    background: config.page.background,
  },
  header: {
    background1: config.header.background1,
    background2: config.header.background2,
  },
  stepper: {
    filledColor: config.stepper.filledColor,
    emptyColor: config.stepper.emptyColor,
  },
  title: {
    fontSize: `${config.title.fontSize}px`,
    color: config.title.color,
  },
  description: {
    fontSize: `${config.description.fontSize}px`,
    color: config.description.color,
  },
  buttons: {
    primary: {
      border: "none",
      background: config.primaryButton.background,
      fontSize: `${config.primaryButton.fontSize}px`,
      color: config.primaryButton.color,
    },
    secondary: {
      border: `solid 1px ${config.primaryButton.background}`,
      background: config.secondaryButton.background,
      fontSize: `${config.secondaryButton.fontSize}px`,
      color: config.secondaryButton.color,
    },
  },
});
