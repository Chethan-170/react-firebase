import { makeStyles } from '@material-ui/core/styles';
const myStyle = makeStyles((theme)=>({
    container:{
        marginTop: '20px !important'
    },
    gridItem : {
        width: '100%'
    },
    cardTitle:{        
        padding: '17px 15px',
        margin: 0,
        backgroundColor: '#9c27b0',
        color: 'white',
        fontSize: '20px !important',
        fontWeight: 'bold'
    }
}));
export default myStyle;