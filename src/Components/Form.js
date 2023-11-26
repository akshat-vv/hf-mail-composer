import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Form = () => {
    const [hf, setHf] = useState('');
    const [defect, setDefect] = useState('');

  return (
    <div>
        <TextField id="Hfs" label="HF (AEM, DEXP, DEXPS)" variant="outlined" onChange={(e)=>setHf(e.target.value)}/>
        <TextField id="Defect" label="Defect" variant="outlined" onChange={(e)=>setDefect(e.target.value)} />
    </div>
  )
}

export default Form