import React, { useState } from 'react'
import { Container, Button, Typography, Card } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { makeChangesInList, search } from '../../../../actions/lists'

const TodoList = ({ list, setCompleted }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [searchTag, setSearchTag] = useState('')
    
    const addToComplete = () =>{
        dispatch(makeChangesInList(list))
        setCompleted(prev => !prev)    
    }
    console.log(searchTag)
    const searchList = (tag) => {
        setSearchTag(tag)
        dispatch(search(tag))
    }

    return (
        <Container className={classes.listContainer}>
            <div className={classes.Container}>
                <Typography variant='h6' className={classes.list}> {list?.title} </Typography>
                <div className={classes.tagsContainer}>
                {
                    list.tags?.map((tag) => (
                            <Card key={tag} className={classes.tags} onClick={()=> searchList(tag)}>
                                <Typography variant='h6'>
                                    #{tag}
                                </Typography>
                            </Card>
                        )
                )}
                </div>
            </div>   
            {!list?.isCompleted && (
                <Button onClick={addToComplete} variant='contained' color='secondary'>
                    Remove <Clear />
                </Button>
            )}
        </Container>
    )
}

export default TodoList
