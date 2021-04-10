import { Card, CardContent } from "@material-ui/core";
import myStyle from '../../Style';
const ProjectSummary = ({title,body})=>{
    const classes = myStyle();
    return(
        <Card style={{margin:'15px 0px'}}>
            <CardContent style={{padding:'0'}}>
                <div className={classes.cardTitleSecondary}>{title || "Card Title"}</div>
                <div className={classes.cardBodySecondary}>{body || "Card Body"}</div>
            </CardContent>
        </Card>
    )
}
export default ProjectSummary;