import { Button, Stack } from "@mui/joy";
import { useFormik, FormikProps } from "formik";
import { singUpFormValues } from "../Input/InputTyes";
import InputComponent from "../Input/InputComponent";
import {
  signUpFormValues,
  singUpValidationSchema,
} from "./formikSchema/formikValueTypes";

const SignUpForm = () => {
  const formik: FormikProps<singUpFormValues> = useFormik<singUpFormValues>({
    initialValues: signUpFormValues,
    validationSchema: singUpValidationSchema,
    onSubmit: (values) => {},
  });

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <form onSubmit={formik.handleSubmit}>
        <Stack width={350} direction="column" gap={2}>
          <InputComponent
            name="name"
            type="text"
            placeholderValue="Enter your name"
            formik={formik}
          />
          <InputComponent
            name="email"
            type="email"
            placeholderValue="Enter your email"
            formik={formik}
          />
          <InputComponent
            name="password"
            type="password"
            placeholderValue="Enter your password"
            formik={formik}
          />
          <InputComponent
            name="initialUnit"
            type="number"
            placeholderValue="Enter your initial unit"
            formik={formik}
          />
          <Button
            disabled={false}
            loading={false}
            onClick={function () {}}
            size="lg"
            variant="soft"
            sx={{ marginTop: "0 !important", alignSelf: "end" }}
          >
            Sign Up
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignUpForm;
