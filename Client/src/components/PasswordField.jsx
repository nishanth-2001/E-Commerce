import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput";
import StandardInput from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DEFAULT_INPUT_VARIANT } from "../constants";

const PasswordField = ({
  label,
  style,
  value,
  handleChange,

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
    <FormControl fullWidth required={required} variant={variant} style={style}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};

export default PasswordField;
