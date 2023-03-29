import { CustomFieldset } from "./styles";
import { Field } from "formik";

type CustomInputTextProps = {
  label: string;
  fieldName: string;
  helperText?: string;
};

export const CustomInputText = ({
  label,
  fieldName,
  helperText,
}: CustomInputTextProps) => (
  <CustomFieldset>
    <legend>{label}</legend>
    <Field type="text" name={fieldName} />
    {helperText && <label>{helperText}</label>}
  </CustomFieldset>
);
