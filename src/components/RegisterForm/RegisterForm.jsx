import React from 'react';
import Button from '@material-ui/core/Button'

function RegisterForm() {
    return(
        <form>
            <label>Name</label>
            <input type="text" />

            <label>Surname</label>
            <input type="text" />

            <label>CPF</label>
            <input type="text" />

            <label>Promotions</label>
            <input type="checkbox" />

            <label>Newsletter</label>
            <input type="checkbox" />

            <Button variant="contained" color="primary" type="submit">Register</Button>
        </form>
    );
}

export default RegisterForm;