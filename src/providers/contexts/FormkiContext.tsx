import { Form, Formik } from "formik";
import { ReactNode } from "react";

export const FormikContext = ({ children }: { children: ReactNode }) => {
  const initialValues = {};

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>{children}</Form>
    </Formik>
  );
};
