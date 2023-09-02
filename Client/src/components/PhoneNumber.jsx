import React from 'react';

import MuiTextField from '@mui/material/TextField';
import MuiInputAdornment from '@mui/material/InputAdornment';

const PhoneNumberInput = (props) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <MuiTextField
      label="Phone Number"
      variant="outlined"
      fullWidth
      value={phoneNumber}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <MuiInputAdornment position="start">
            +91
          </MuiInputAdornment>
        ),
      }}
    />
  );
}

export default PhoneNumberInput;
