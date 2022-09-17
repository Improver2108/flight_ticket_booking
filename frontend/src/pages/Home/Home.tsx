import React from "react";
import './Home.css';
import Button from '@mui/material/Button';

const Home=()=>{
    return(
        <div className="Home">
            <h1 id='welcome'>Welcome to AIRGO!!</h1>
            <div id='homeButtons'>
                <Button variant="contained" type="submit">Go to Login Page!</Button>
                <Button variant="contained" type='submit'>Register yourself!</Button>
            </div>
        </div>       
    )
}

export default Home;