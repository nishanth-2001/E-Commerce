import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormLabel from '@mui/material/FormLabel';

const Radio = (props) => {
    return(
        <MuiFormControl>
        <MuiFormLabel id="demo-row-radio-buttons-group-label">Gender</MuiFormLabel>
        <MuiRadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <MuiFormControlLabel value="female" control={<MuiRadio />} label="Female" />
          <MuiFormControlLabel value="male" control={<MuiRadio />} label="Male" />
          <MuiFormControlLabel value="other" control={<MuiRadio />} label="Other" />
          <MuiFormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </MuiRadioGroup>
      </MuiFormControl>
    )
}

export default Radio