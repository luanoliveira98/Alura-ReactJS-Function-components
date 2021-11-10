import React from 'react';
import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function RegisterForm() {
    return(
        <form>
            <TextField id="name" label="Name" variant="outlined" margin="normal" fullWidth />
            <TextField id="last_name" label="Last Name"  variant="outlined" margin="normal" fullWidth />
            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />

            <FormControlLabel 
                label="Promotions" 
                control={<Switch name="promotions" defaultChecked color="primary"/>} 
            />
            <FormControlLabel 
                label="Newsletter" 
                control={<Switch name="newsletter" color="primary"/>} 
            />

            <Button variant="contained" color="primary" type="submit">Register</Button>
        </form>
    );
}

export default RegisterForm;