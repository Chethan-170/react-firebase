import { Fragment } from "react"
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
const SignInLinks = ()=>{
    return(
        <Fragment>
            <Button color="inherit">New Project</Button>
            <Button color="inherit">Logout</Button>
            <Avatar className={classes.orange}>N</Avatar>
        </Fragment>
    )
}
export default SignInLinks;