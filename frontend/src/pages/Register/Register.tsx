import { Button, TextField } from "@mui/material";
import React from "react";
import './Register.css';

const Register=()=>{
    
    const renderForm=(
        <div className="form">
            <h1>Register Yourself!!</h1>
            <form action="" method="get">
                <div className="input-copntainer">
                    <TextField label="Username" name="uname" type="email" required></TextField>
                </div>
                <div className="input-copntainer">
                    <TextField label="Password" name="uname" type="password" required></TextField>
                </div>
                <div className="button-copntainer">
                    <Button variant="contained" type="submit">Submit</Button> 
                </div>   
            </form>
        </div>
    );

    return(
        <div>
            {renderForm}
        </div>
    )
}

export default Register;