import { Fragment } from "react"
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme)=>({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    }
}))
const SignInLinks = ()=>{
    const classes = useStyles();
    return(
        <Fragment>
            <Button color="inherit">New Project</Button>
            <Button color="inherit">Logout</Button>
            <Avatar className={classes.orange}>CN</Avatar>
        </Fragment>
    )
}
export default SignInLinks;