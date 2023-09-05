import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FilledInput from "@mui/material/FilledInput";
import StandardInput from "@mui/material/Input";

import { COUNTRY_CODE, DEFAULT_INPUT_VARIANT } from '../constants';


const PhoneNumberInput = ({
    label,
    variant = DEFAULT_INPUT_VARIANT,
    id = crypto.randomUUID()
}) => {
  let Input = OutlinedInput

  if(variant === "filled") {
    Input = FilledInput

  } else if (variant === "standard"){
    Input = StandardInput
  }
    return(
        <FormControl fullWidth variant={variant}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          id={id}
          startAdornment={<InputAdornment position="start">{COUNTRY_CODE}</InputAdornment>}
          label="PhoneNumber"
        />
      </FormControl>
    )
}

export default PhoneNumberInput

