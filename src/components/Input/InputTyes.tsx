import { FormikProps } from "formik";

export interface singUpFormValues {
  name: string;
  email: string;
  password: string;
  initialUnit: string | number;
}

export interface InputPropsTypes {
  name: keyof singUpFormValues;
  type: string;
  placeholderValue: string;
  formik: FormikProps<singUpFormValues>;
}
