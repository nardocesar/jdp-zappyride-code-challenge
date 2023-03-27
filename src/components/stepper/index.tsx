import { FC } from "react";
import { StepperButton, StepperContainer, StepperWrapper } from "./styles";

export const StepperComponent: FC = () => {
  return (
    <StepperContainer>
      <span>Step 1 of 3</span>
      <StepperWrapper>
        <StepperButton active />
        <StepperButton active={false} />
        <StepperButton active={false} />
      </StepperWrapper>
    </StepperContainer>
  );
};
