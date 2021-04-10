import { Fragment } from "react"
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";

const SignOutLinks = (props)=>{
    return(
        <Fragment>
            <Button color="inherit" onClick={()=>{props.history.push('signup')}}>Signup</Button>
            <Button color="inherit" onClick={()=>{props.history.push('signin')}}>Signin</Button>
        </Fragment>
    )
}
export default withRouter(SignOutLinks);