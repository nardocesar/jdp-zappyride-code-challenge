interface FontStylingType {
  fontSize: number;
  color: string;
}

interface ButtonType extends FontStylingType {
  background: string;
}

interface LayoutType {
  page: {
    title: string;
    background: string;
  };
  header: {
    background1: string;
    background2: string;
  };
  title: FontStylingType;
  description: FontStylingType;
  primaryButton: ButtonType;
  secondaryButton: ButtonType;
}

interface StepProps {
  order: number;
  title: string;
  description: string;
  fieldTitle: string;
  fieldType: "text" | "select";
  helperText?: string;
  options?: string[];
}

interface StepsType {
  stepper: {
    filledColor: string;
    emptyColor: string;
  };
  steps: StepProps[];
}

export interface PageConfigType extends LayoutType, StepsType {}
