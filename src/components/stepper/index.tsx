import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { NavigationType } from "types";
import { StepperButton, StepperContainer, StepperWrapper } from "./styles";

type StepperComponentProps = {
  steps: NavigationType[];
};

export const StepperComponent: FC<StepperComponentProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleClick = (active: number, route: string) => {
    router.push(route);
    setActiveStep(active);
  };

  useEffect(() => {
    const activeRoute = steps.find((step) =>
      router.asPath.includes(step.route)
    );

    if (activeRoute) {
      setActiveStep(activeRoute?.order as number);
    } else {
      setActiveStep(0);
    }
  }, [router.asPath, steps]);

  return (
    <StepperContainer>
      <span>
        Step {activeStep + 1} of {steps.length + 1}
      </span>
      <StepperWrapper>
        <StepperButton
          active={activeStep === 0}
          onClick={() => handleClick(0, "/")}
          type="button"
        />
        {steps
          .sort((a, b) => a.order - b.order)
          .map((step, index) => (
            <StepperButton
              key={`step_button_${index}`}
              active={activeStep === step.order}
              onClick={() => handleClick(step.order, `/steps/${step.route}`)}
              type="button"
            />
          ))}
      </StepperWrapper>
    </StepperContainer>
  );
};
