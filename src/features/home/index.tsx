import { CustomButton, SectionTitleComponent } from "components";
import Image from "next/image";
import { FC } from "react";
import { IconsWrapper } from "./styles";

import { OrganizationIcon, CarIcon, StatsIcon } from "assets/icons";

export const HomeComponent: FC = () => {
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

      <CustomButton variant="primary">
        Create your first vehicle set
      </CustomButton>
    </>
  );
};
