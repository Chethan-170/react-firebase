import { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import { withRouter } from 'react-router';
import Logout from './Logout';
import LogOutDialogContext from '../contexts/LogOutDialogContext';

const useStyles = makeStyles((theme)=>({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    }
}))
const SignInLinks = (props)=>{
    const [dialogStatus, setDialogStatus] = useState(false);
    const classes = useStyles();
    const handleLogout = () => setDialogStatus(true);    
    return(
        <Fragment>
            <LogOutDialogContext.Provider value={{ dialogStatus, setDialogStatus }}>
                <Button color="inherit"  onClick={()=>{props.history.push('new')}}>New Project</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
                <Avatar className={classes.orange}>CN</Avatar>
                <Logout/>
            </LogOutDialogContext.Provider>
        </Fragment>
    )
}
export default withRouter(SignInLinks);