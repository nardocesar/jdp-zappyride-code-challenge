import { StepperComponent } from "components";
import { usePageConfig } from "providers/contexts";
import { FC } from "react";
import { HeaderContainer, HeaderContent } from "./styles";

export const HeaderComponent: FC = () => {
  const { steps } = usePageConfig();

  return (
    <HeaderContainer>
      <HeaderContent>
        <StepperComponent />
      </HeaderContent>
    </HeaderContainer>
  );
};
