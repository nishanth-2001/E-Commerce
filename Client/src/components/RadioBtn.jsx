import MuiRadio from "@mui/material/Radio";
import MuiRadioGroup from "@mui/material/RadioGroup";
import MuiFormControlLabel from "@mui/material/FormControlLabel";
import MuiFormControl from "@mui/material/FormControl";
import MuiFormLabel from "@mui/material/FormLabel";


const Radio = ({
  label,
  options,
  alignHorizontal = false,
  id = crypto.randomUUID(),
}) => {
  return (
    <MuiFormControl>
      <MuiFormLabel id={id}>{label}</MuiFormLabel>
      <MuiRadioGroup row={alignHorizontal} aria-labelledby={id}>
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
    </MuiFormControl>
  );
};

export default Radio;
