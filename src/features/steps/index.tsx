import {
  CustomButton,
  SectionTitleComponent,
  CustomInputText,
  SelectWithAutocomplete,
} from "components";
import { useFormikContext } from "formik";
import { useRouter } from "next/router";
import { usePageConfig } from "providers/contexts";
import { useNavigation } from "providers/hooks";
import { FC, useMemo } from "react";
import { StepProps } from "types";
import { ActionsWrapper } from "./styles";

type SelectOptions = {
  label: string;
  value: string;
};

const renderField = (
  stepConfig: StepProps,
  fieldName: string,
  options: SelectOptions[],
  handleSelectChange: (fieldName: string, value: string) => void
) => {
  switch (stepConfig.fieldType) {
    case "text":
      return (
        <CustomInputText
          label={stepConfig?.fieldTitle}
          fieldName={fieldName}
          helperText={stepConfig.helperText}
        />
      );
    case "select":
      return (
        <SelectWithAutocomplete
          options={options}
          label={stepConfig.fieldTitle}
          fieldName={fieldName}
          onChange={handleSelectChange}
        />
      );
    default:
      return;
  }
};

export const StepsComponent: FC = () => {
  const router = useRouter();
  const config = usePageConfig();
  const navigation = useNavigation();
  const { setFieldValue } = useFormikContext();

  const formField = navigation?.find((step) =>
    router.asPath.includes(step.route)
  );

  const stepConfig = config?.steps.find(
    (step) => step.order === formField?.order
  ) as StepProps;

  const fieldName = formField?.route.replaceAll("-", "_") as string;

  const fieldOptions = stepConfig.options
    ? stepConfig.options?.map((option) => ({
        label: option,
        value: option.toLowerCase().replaceAll(" ", "_"),
      }))
    : [];

  const handleSelectChange = (fieldName: string, value: string) =>
    setFieldValue(fieldName, value);

  const isLastStep = useMemo(
    () => (config?.steps.length as number) === stepConfig.order,
    [config?.steps.length, stepConfig.order]
  );

  const goToNextStep = () => {
    const nextStep = navigation?.find(
      (step) => step.order === stepConfig.order + 1
    );
    router.push(`/steps/${nextStep?.route}`);
  };

  const goToPrevStep = () => {
    const nextStep = navigation?.find(
      (step) => step.order === stepConfig.order - 1
    );

    if (nextStep) {
      router.push(`/steps/${nextStep.route}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <>
      <SectionTitleComponent
        title="General Information"
        description="We use this information to calculate fuel costs and applicable incentives"
      />

      {renderField(stepConfig, fieldName, fieldOptions, handleSelectChange)}

      <ActionsWrapper>
        <CustomButton variant="secondary" type="button" onClick={goToPrevStep}>
          back
        </CustomButton>

        {!isLastStep ? (
          <CustomButton variant="primary" type="button" onClick={goToNextStep}>
            next
          </CustomButton>
        ) : (
          <CustomButton variant="primary" type="submit">
            send
          </CustomButton>
        )}
      </ActionsWrapper>
    </>
  );
};
