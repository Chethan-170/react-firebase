import { FormControl,Button,TextField,Card,CardContent } from "@material-ui/core";
import { useState } from "react";
import myStyle from '../../Style';
const Signup = ()=>{
    const classes = myStyle();
    const [state,setState] = useState({});
    const handleInputChange = event =>{
        setState({...state,[event.target.id]: event.target.value});
    }
    const handleSubmit = () =>{
        if(! state.name) document.getElementById('name').focus();
        else if(! state.mobile) document.getElementById('mobile').focus();
        else if(! state.email) document.getElementById('email').focus();
        else if(! state.password) document.getElementById('password').focus();
        else console.log(state);        
    }
    return(
        <div className={classes.authCardContainer}>
            <Card style={{width:'600px'}}>
                <CardContent style={{padding:'0'}}>
                    <div className={classes.cardTitle} style={{textAlign:'center'}}>Sign Up</div>
                    <div className={classes.cardBody}>
                        <form style={{margin:25}}>
                            <FormControl className={classes.formControl}>
                                <TextField id="name" label="Name" variant="outlined" onChange={(event)=>{handleInputChange(event)}}/>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField id="mobile" label="mobile" variant="outlined" onChange={(event)=>{handleInputChange(event)}}/>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField id="email" label="Email" variant="outlined" onChange={(event)=>{handleInputChange(event)}}/>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField id="password" type="password" label="Password" variant="outlined" onChange={(event)=>{handleInputChange(event)}}/>
                            </FormControl>
                            <Button onClick={handleSubmit} className={`${classes.button} ${classes.floatRight}`} variant="contained" color="primary">
                                Sign up
                            </Button>                            
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>        
    )
}
export default Signup;