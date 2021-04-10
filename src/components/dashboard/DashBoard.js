import { Container,Grid } from '@material-ui/core';
import { Card,CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import myStyle from '../../Style';
import Notifications from './Notifications';

const DashBoard = ()=>{
    const classes = myStyle();
    return(
        <Container>
            <Grid container spacing={3} className={classes.container}>
                <Grid item className={classes.gridItem} lg={8} md={12}>
                    <Card>
                        <CardContent style={{padding:'0'}}>
                            <div className={classes.cardTitle}>Project Lists</div>
                            <div className={classes.cardBody}>Card Body</div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item className={classes.gridItem} lg={4} md={12}>
                    <Notifications/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default DashBoard;