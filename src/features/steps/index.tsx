import { CustomButton, SectionTitleComponent } from "components";
import { FC } from "react";

export const StepsComponent: FC = () => {
  return (
    <>
      <SectionTitleComponent
        title="Going electric starts with understanding your needs"
        description="We need to understand your requirements so we can recommend the
        appropriate electric vehicle, charger and identify incentives."
      />

      <CustomButton variant="primary">
        Create your first vehicle set
      </CustomButton>
    </>
  );
};
