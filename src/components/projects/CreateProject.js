import { FormControl,Button,TextField,Card,CardContent } from "@material-ui/core";
import { useState } from "react";
import myStyle from '../../Style';
const CreateProject = ()=>{
    const classes = myStyle();
    const [state,setState] = useState({});
    const handleInputChange = event =>{
        setState({...state,[event.target.id]: event.target.value});
    }
    const handleSubmit = () =>{
        if(! state.title) document.getElementById('title').focus();
        else if(! state.description) document.getElementById('description').focus();
        else console.log(state);        
    }
    return(
        <div className={classes.authCardContainer}>
            <Card style={{width:'600px'}}>
                <CardContent style={{padding:'0'}}>
                    <div className={classes.cardTitle} style={{textAlign:'center'}}>New Project</div>
                    <div className={classes.cardBody}>
                        <form style={{margin:25}}>                            
                            <FormControl className={classes.formControl}>
                                <TextField id="title" label="Title" variant="outlined" onChange={(event)=>{handleInputChange(event)}}/>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField id="description" label="Description" variant="outlined" onChange={(event)=>{handleInputChange(event)}}
                                    multiline rows={4}
                                />
                            </FormControl>
                            <Button onClick={handleSubmit} className={`${classes.button} ${classes.floatRight}`} variant="contained" color="primary">
                                Create
                            </Button>                            
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>        
    )
}
export default CreateProject;