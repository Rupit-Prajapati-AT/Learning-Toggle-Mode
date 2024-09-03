import * as Yup from "yup";

export const signUpFormValues = {
  name: "",
  email: "",
  password: "",
  initialUnit: "",
};

export const singUpValidationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Minimum 4 characters required")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
  initialUnit: Yup.string()
    .matches(
      /^\d{5,}$/,
      "Unit should be in 6 digit or include 0 in the beginning"
    )
    .required("Unit is required"),
});
