import { StepperComponent } from "components";
import { FC } from "react";
import { HeaderContainer, HeaderContent } from "./styles";

export const HeaderComponent: FC = () => (
  <HeaderContainer>
    <HeaderContent>
      <StepperComponent />
    </HeaderContent>
  </HeaderContainer>
);
