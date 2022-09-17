import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import './Login.css';


const Login=()=>{

    const renderForm=(
        <div className="form">
            <h1>Sign In!!</h1>
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
        <div className="Login">
            {renderForm}    
        </div>
    )
}

export default Login;
