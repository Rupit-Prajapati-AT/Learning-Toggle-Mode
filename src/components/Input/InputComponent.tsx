import { FormControl, FormHelperText, Input, Typography } from "@mui/joy";
import { FC } from "react";
import { InputPropsTypes } from "./InputTyes";
import { CheckCircleOutlined } from "@mui/icons-material";
const InputComponent: FC<InputPropsTypes> = ({
  name,
  type,
  placeholderValue,
  formik,
}) => {
  return (
    <>
      <FormControl error={formik.touched[name] && Boolean(formik.errors[name])}>
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholderValue}
          size="lg"
          variant="soft"
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
        />
        {formik.touched[name] && formik.errors[name] && (
          <FormHelperText>
            {formik.touched[name]}
            {formik.errors[name]}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default InputComponent;
