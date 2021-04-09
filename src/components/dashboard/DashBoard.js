import { Container,Grid } from '@material-ui/core';
import { Card,CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import myStyle from '../../Style';

const DashBoard = ()=>{
    const classes = myStyle();
    return(
        <Container>
            <Grid container spacing={3} className={classes.container}>
                <Grid item className={classes.gridItem} lg={8} md={12}>
                    <Card>
                        <CardContent style={{padding:'0'}}>
                            <div className={classes.cardTitle}>Card Title</div>
                            <h3>Card Title</h3>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item className={classes.gridItem} lg={4} md={12}>
                    <h1 style={{backgroundColor:'black'}}>bYE</h1>
                </Grid>
            </Grid>
        </Container>
    )
}
export default DashBoard;