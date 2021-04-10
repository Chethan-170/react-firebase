import { Card,CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import myStyle from '../../Style';
const ProjectDetails = (props)=>{
    console.log(props);
    const id = props.match.params.id;
    const classes = myStyle();
    return(
        <Card variant="outlined" style={{margin: 30}}>
            <CardContent style={{padding:'0'}}>
                <Typography variant="h5" component="h2" className={classes.cardTitle}>
                    #Project {id}
                </Typography>
                <Typography variant="h6" component="p" className={classes.cardBody}>
                    well meaning and kindly.gggggggggggggggggggggg
                </Typography>
                <Typography variant="button" component="p" className={classes.cardFooter}>
                   Posted by Chethan N <br/> 10th April, 11am
                </Typography>
            </CardContent>
      </Card>
    )
}
export default ProjectDetails;