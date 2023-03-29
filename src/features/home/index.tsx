import { CustomButton, SectionTitleComponent } from "components";
import Image from "next/image";
import { FC } from "react";
import { IconsWrapper } from "./styles";

import { OrganizationIcon, CarIcon, StatsIcon } from "assets/icons";
import { useRouter } from "next/router";
import { useNavigation } from "providers/hooks";

export const HomeComponent: FC = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const navigateToFirstStep = () => {
    const firstStep = navigation?.find((step) => step.order === 1);
    router.push(`/steps/${firstStep?.route}`);
  };

  return (
    <>
      <SectionTitleComponent
        title="Going electric starts with understanding your needs"
        description="We need to understand your requirements so we can recommend the
        appropriate electric vehicle, charger and identify incentives."
      />

      <IconsWrapper>
        <figure>
          <Image src={OrganizationIcon} alt="organization icon" />
          <figcaption>Tell us about your organization</figcaption>
        </figure>
        <figure>
          <Image src={CarIcon} alt="organization icon" />
          <figcaption>Tell us about your vehicles</figcaption>
        </figure>
        <figure>
          <Image src={StatsIcon} alt="organization icon" />
          <figcaption>See how much you can save</figcaption>
        </figure>
      </IconsWrapper>

      <CustomButton
        variant="primary"
        type="button"
        onClick={navigateToFirstStep}
      >
        Create your first vehicle set
      </CustomButton>
    </>
  );
};
