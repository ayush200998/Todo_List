import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
    listContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid gray',
        boxShadow: '0px 1px 0px gray'
    },
    list: {
        fontSize: '1.4rem',
        fontWeight: 200,
        color: 'black',
        marginBottom: '10px',
        marginTop: '10px',
        fontFamily: 'Didot serif',
        marginLeft: '10px'
    }
}))