import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    paper:{
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 30px',
        width: '50%', 
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        } 
    },
    pendingHeader: {
        color: '#7A4988',
        fontSize: '1.5rem',
        fontWeight: 300,
        marginBottom: '10px',
        marginTop: '10px',
    }
}))