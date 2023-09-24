import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import StandardInput from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

import { COUNTRY_CODE, DEFAULT_INPUT_VARIANT } from "../constants";

const PhoneNumberInput = ({
  label,
  style,
  value,
  name,
  handleChange,
  handleBlur,
  errorMessage = "",

  required = false,

  variant = DEFAULT_INPUT_VARIANT,
  id = crypto.randomUUID(),
}) => {
  let Input = OutlinedInput;

  if (variant === "filled") {
    Input = FilledInput;
  } else if (variant === "standard") {
    Input = StandardInput;
  }
  return (
    <FormControl
      error={Boolean(errorMessage)}
      fullWidth
      required={required}
      variant={variant}
      style={style}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        value={value}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={(e) => {
          const invalidChars = ["+", "-", "e", "."];
          if (invalidChars.includes(e.key)) {
            e.preventDefault();
          }
        }}
        startAdornment={
          <InputAdornment position="start">+{COUNTRY_CODE}</InputAdornment>
        }
        label="PhoneNumber"
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default PhoneNumberInput;
