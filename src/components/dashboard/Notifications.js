import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import myStyle from '../../Style';
const Notifications = ()=>{
    const classes = myStyle();
    return(
        <Card>
            <CardContent style={{padding:'0'}}>
                <div className={classes.cardTitle} style={{textAlign:'center'}}>Notifications</div>
                <div className={classes.cardBody}>Card Body</div>
            </CardContent>
        </Card>
    )
}
export default Notifications;