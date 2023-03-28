import { StepperComponent } from "components";
import { FC } from "react";
import { HeaderContainer, HeaderContent } from "./styles";

export const HeaderComponent: FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <StepperComponent />
      </HeaderContent>
    </HeaderContainer>
  );
};
