import { Container,Grid } from '@material-ui/core';
import myStyle from '../../Style';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

const DashBoard = ()=>{
    const classes = myStyle();
    return(
        <Container>
            <Grid container spacing={3} className={classes.container}>
                <Grid item className={classes.gridItem} lg={8} md={12}>
                    <ProjectList/>
                </Grid>
                <Grid item className={classes.gridItem} lg={4} md={12}>
                    <Notifications/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default DashBoard;