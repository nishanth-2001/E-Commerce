import MuiTextField from "@mui/material/TextField";
import { DEFAULT_INPUT_VARIANT } from "../constants";

const TextField = ({
  label,
  style,
  value,
  handleChange,
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
      onChange={handleChange}
      type={type}
      required={required}
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
