import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import myStyle from '../../Style';
import ProjectSummary from './ProjectSummary';
const ProjectList = ()=>{
    const classes = myStyle();
    return(
        <Card>
            <CardContent style={{padding:'0'}}>
                <div className={classes.cardTitle}>Project Lists</div>
                <div className={classes.cardBody}>
                    <ProjectSummary title="#Project 1" body='1,2,3'/>
                    <ProjectSummary title="#Project 2" body='1,2,3'/>
                    <ProjectSummary title="#Project 3" body='1,2,3'/>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProjectList;