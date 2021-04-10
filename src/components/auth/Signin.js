import { FormControl,Button,TextField,Card,CardContent } from "@material-ui/core";
import myStyle from '../../Style';
const Signin = ()=>{
    const classes = myStyle();
    return(
        <div className={classes.authCardContainer}>
            <Card style={{width:'600px'}}>
                <CardContent style={{padding:'0'}}>
                    <div className={classes.cardTitle} style={{textAlign:'center'}}>Sign In</div>
                    <div className={classes.cardBody}>
                        <form>
                            <FormControl className={classes.formControl}>
                                <TextField label="Email" variant="outlined" />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField type="password" label="Password" variant="outlined" />
                            </FormControl>
                            <Button type='submit' className={`${classes.button} ${classes.floatRight}`} variant="contained" color="primary">
                                Submit
                            </Button>                            
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>        
    )
}
export default Signin;