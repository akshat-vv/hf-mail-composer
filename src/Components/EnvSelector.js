import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const EnvSelector = () => {

    const [env, setEnv] = useState('SIT21');

    const handleChange = (event) => {
        setEnv(event.target.value);
      };

  return (
    <FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">Select the Env</FormLabel>
    <RadioGroup
    row
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={env}
      onChange={handleChange}
    >
      <FormControlLabel value="SIT21" control={<Radio/>} label="SIT21" />
      <FormControlLabel value="SIT25" control={<Radio/>} label="SIT25" />
    </RadioGroup>
  </FormControl>
  )
}

export default EnvSelector