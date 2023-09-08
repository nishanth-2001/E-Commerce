import MuiTextField from "@mui/material/TextField";
import { DEFAULT_INPUT_VARIANT } from "../constants";

const TextField = ({
  label,
  style,
  value,
  name,

  handleBlur,
  handleChange,
  errorMessage = "",
  type = "text",
  required = false,
  variant = DEFAULT_INPUT_VARIANT,
}) => {
  return (
    <MuiTextField
      fullWidth
      label={label}
      variant={variant}
      style={style}
      value={value}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      type={type}
      required={required}
      error={Boolean(errorMessage)}
      helperText={errorMessage}
    />
  );
};

export default TextField;

// const TextField = (props) =>{
//     return(
//         <MuiTextField
//         fullWidth
//        label={props.label}
//         variant={props.variant || DEFAULT_INPUT_VARIANT}

//         />
//     )
// }
