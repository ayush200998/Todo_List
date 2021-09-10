import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
import useStyles from './styles'
import TodoList from './TodoList/TodoList'
import { useSelector } from 'react-redux'

const Lists = () => {
    const classes = useStyles()
    const lists = useSelector(state => state)   //JSON.parse(localStorage.getItem('lists'))
    const pendingLists = lists?.filter(list => list.isCompleted === false)
    const completedLists = lists?.filter(list => list.isCompleted === true)
    const [completed, setCompleted] = useState(false)
    

    return (
        <Paper className={classes.paper} >
            <Typography className={classes.pendingHeader} variant='h6'>
                Pending
            </Typography>
            {pendingLists?.length !== 0 ? pendingLists?.map(list => (
                <TodoList
                    key={list.title}
                    list={list}
                    completed={completed}
                    setCompleted={setCompleted}
                />
            )) :
                <Typography variant='h6' style={{color: 'gray'}}>
                    Add a Todo to the list.
                </Typography>
            }

            <Typography className={classes.pendingHeader} variant='h6'>
                Completed
            </Typography>
            {completedLists?.length !== 0 ? completedLists?.map(list => (
                <TodoList
                    key={list.title}
                    list={list}
                />
            )) :
                <Typography variant='h6' style={{color: 'gray'}}>
                    All your completed todo's will be shown here.
                </Typography>
            }
        </Paper>
    )
}

export default Lists
