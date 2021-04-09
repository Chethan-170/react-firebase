import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SignInLinks from './SignInLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  userIcon: {
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <SvgIcon>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Dashboard
                </Typography>
                <Button color="secondary">New Project</Button>
                <Button color="inherit">Signup</Button>
                <Button color="inherit">Login</Button>
                <AccountCircleIcon className={ classes.userIcon }/>
                <SignInLinks/>
            </Toolbar>
        </AppBar>
    </div>
  );
}
