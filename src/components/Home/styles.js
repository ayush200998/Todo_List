import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    inputContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        alignItems: 'center',
    },
    toolBar: {
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
          },
    },
    heading: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 300,
    },
    button: {
        marginLeft: '3px',
    },
    form:{
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
}))