import { StepperComponent } from "components";
import { useNavigation } from "providers/hooks";
import { FC } from "react";
import { NavigationType } from "types";
import { HeaderContainer, HeaderContent } from "./styles";

export const HeaderComponent: FC = () => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <StepperComponent steps={navigation as NavigationType[]} />
      </HeaderContent>
    </HeaderContainer>
  );
};
