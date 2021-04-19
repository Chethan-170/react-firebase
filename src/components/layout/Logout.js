import React , { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LogOutDialogContext from '../contexts/LogOutDialogContext';

export default function Logout() {
    const {dialogStatus ,setDialogStatus} = useContext(LogOutDialogContext);
    const handleClose = () => {
        setDialogStatus(false);
    }
    return (
        <div>
            <Dialog
            open={dialogStatus}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
            >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Log out
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to logout?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                Confirm
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}