import MuiRadio from "@mui/material/Radio";
import MuiRadioGroup from "@mui/material/RadioGroup";
import MuiFormControlLabel from "@mui/material/FormControlLabel";
import MuiFormControl from "@mui/material/FormControl";
import MuiFormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

const Radio = ({
  label,
  style,
  name,
  required,
  value,
  options,
  handleBlur,
  handleChange,
  errorMessage = "",
  alignHorizontal = false,
  id = crypto.randomUUID(),
}) => {
  return (
    <MuiFormControl
      error={Boolean(errorMessage)}
      required={required}
      style={style}>
      <MuiFormLabel id={id}>{label}</MuiFormLabel>
      <MuiRadioGroup
        row={alignHorizontal}
        aria-labelledby={id}
        value={value}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}>
        {options.map((option) => {
          return (
            <MuiFormControlLabel
              key={option.value}
              value={option.value}
              control={<MuiRadio />}
              label={option.label}
            />
          );
        })}
      </MuiRadioGroup>
      <FormHelperText>{errorMessage}</FormHelperText>
    </MuiFormControl>
  );
};

export default Radio;
