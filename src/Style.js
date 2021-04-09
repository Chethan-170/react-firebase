import { makeStyles } from '@material-ui/core/styles';
const myStyle = makeStyles((theme)=>({
    container:{
        marginTop: '20px'
    },
    gridItem : {
        width: '100%'
    },
    cardTitle:{        
        padding: '17px 15px',
        margin: 0,
        backgroundColor: '#9c27b0',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    cardBody:{
        margin: '20px'
    }
}));
export default myStyle;