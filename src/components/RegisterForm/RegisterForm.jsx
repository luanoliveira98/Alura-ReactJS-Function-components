import React, { useState } from 'react';
import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function RegisterForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCPF] = useState("");
    return(
        <form 
            onSubmit={event => {
                event.preventDefault();
                console.log(name, lastName, cpf);
            }}
        >
            <TextField 
                id="name" label="Name" variant="outlined" margin="normal" fullWidth 
                value={name} onChange={event => {
                    setName(event.target.value);
                }}
            />
            <TextField 
                id="last_name" label="Last Name"  variant="outlined" margin="normal" fullWidth value={lastName} onChange={event => {
                    setLastName(event.target.value);
                }}
            />
            <TextField 
                id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth 
                value={cpf} onChange={event => {
                    setCPF(event.target.value);
                }}
            />

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