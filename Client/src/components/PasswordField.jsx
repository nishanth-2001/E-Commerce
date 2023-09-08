import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput";
import StandardInput from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Tooltip from "@mui/material/Tooltip";

import { DEFAULT_INPUT_VARIANT } from "../constants";

const PasswordField = ({
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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <Tooltip title={`${showPassword ? "Hide" : "Show"} Password`}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        }
        label="Password"
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default PasswordField;
