import type { PageConfigType } from "types";

export const pageConfigMock: PageConfigType = {
  page: {
    background: "#F0F3F5",
    title: "JDP ZappyRide - General Information",
  },
  header: {
    background1: "#FFFFFF",
    background2: "#B9BCC0",
  },
  title: {
    color: "#404040",
    fontSize: 34,
  },
  description: {
    color: "#404040",
    fontSize: 16,
  },
  primaryButton: {
    background: "#0072CE",
    fontSize: 18,
    color: "#FFFFFF",
  },
  secondaryButton: {
    background: "#0072CE",
    fontSize: 18,
    color: "#FFFFFF",
  },
  stepper: {
    filledColor: "#0072CE",
    emptyColor: "#595959",
  },
  steps: [
    {
      order: 1,
      title: "General Information",
      description:
        "We use this information to calculate fuel costs and applicable incentives",
      fieldTitle: "Zip Code",
      fieldType: "text",
      helperText: "Used to check incentive applicability and fuel prices",
    },
    {
      order: 2,
      title: "General Information",
      description:
        "We use this information to calculate fuel costs and applicable incentives",
      fieldTitle: "Building Type",
      fieldType: "select",
      options: [
        "Home (garage)",
        "Small Office",
        "Large Office",
        "Warehouse",
        "Depot",
        "School",
        "Apartment Building",
      ],
    },
    {
      order: 3,
      title: "General Information",
      description:
        "We use this information to calculate fuel costs and applicable incentives",
      fieldTitle: "Address",
      fieldType: "text",
    },
  ],
};
