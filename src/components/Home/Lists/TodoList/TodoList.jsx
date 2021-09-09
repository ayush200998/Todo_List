import React from 'react'
import { Container, Button, Typography } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { makeChangesInList } from '../../../../actions/lists'

const TodoList = ({ list, isCompleted, setComplete }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const addToComplete = () =>{
        dispatch(makeChangesInList(list))
        
        setComplete(prev => !prev)    
    }
    return (
        <Container className={classes.listContainer}>
            <Typography variant='h6' className={classes.list}> {list} </Typography>
            {!isCompleted && (
                <Button onClick={addToComplete} variant='contained' color='secondary'>
                    Remove <Clear />
                </Button>
            )}
        </Container>
    )
}

export default TodoList
