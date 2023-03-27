import {
  CustomButton,
  SectionTitleComponent,
  CustomInputText,
  SelectWithAutocomplete,
} from "components";
import { FC } from "react";
import { ActionsWrapper } from "./styles";

const options = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" },
];

const handleChange = (value: any) => {
  console.log(value);
};

export const StepsComponent: FC = () => {
  return (
    <>
      <SectionTitleComponent
        title="General Information"
        description="We use this information to calculate fuel costs and applicable incentives"
      />

      <CustomInputText />

      <SelectWithAutocomplete
        options={options}
        label="Select an option"
        onChange={handleChange}
      />

      <ActionsWrapper>
        <CustomButton variant="secondary">back</CustomButton>
        <CustomButton variant="primary">next</CustomButton>
      </ActionsWrapper>
    </>
  );
};
