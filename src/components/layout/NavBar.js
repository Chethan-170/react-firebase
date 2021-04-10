import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1
  }
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={()=>{props.history.push('/')}}  edge="start" color="inherit" aria-label="menu">
                    <SvgIcon>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Dashboard
                </Typography>
                <SignInLinks/>
                <SignOutLinks/>
            </Toolbar>
        </AppBar>
    </div>
  );
}
export default withRouter(NavBar);