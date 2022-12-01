import React from 'react';
import { Grid, TextField, InputLabel} from '@mui/material';
const Input = ({half, required, name, handleChange, label, autoFocus, type, value}) => {
    return (
        <Grid style={{marginBottom: '20px'}}>
            <InputLabel className="label">{label}</InputLabel>
            <TextField
                required={required} 
                variant="outlined"
                name={name}
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus={autoFocus}
                type={type}
                size="small"
            />
        </Grid>
    )
}

export default Input;
