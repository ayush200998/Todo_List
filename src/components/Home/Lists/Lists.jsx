import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
import useStyles from './styles'
import TodoList from './TodoList/TodoList' 

const Lists = () => {
    const lists = JSON.parse(localStorage.getItem('lists'))
    const classes = useStyles()
    const [complete, setComplete] = useState(false)

    return (
        <Paper className={classes.paper} >
            <Typography className={classes.pendingHeader} variant='h6'>
                Pending
            </Typography>
            {lists.pending.length !==0 ? lists?.pending?.map(list => (
                <TodoList
                    key={list}
                    list={list}
                    isCompleted={false}
                    setComplete={setComplete}
                    complete={complete}
                />
            )) :
            <Typography style={{color: 'gray'}} variant='h6'>Add a todo to your list.</Typography>
        }
            <Typography className={classes.pendingHeader} variant='h6'>
                Completed
            </Typography>
            {lists.completed.length !==0 ? lists?.completed?.map(list => (
                <TodoList
                    key={list}
                    list={list}
                    isCompleted={true}
                />
            )) :
            <Typography style={{color: 'gray'}} variant='h6'>All your Completed Todo's will be shown here.</Typography>
        }
        </Paper>
    )
}

export default Lists
