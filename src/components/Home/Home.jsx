import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList, resetState } from '../../actions/lists'
import { Container, Grid, Typography, TextField, AppBar, Toolbar, Button } from '@material-ui/core'
import useStyles from './styles'
import Lists from './Lists/Lists'
import { Add, } from '@material-ui/icons'

const Home = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [input, setInput] = useState('')
    const [res, setReset] = useState(false)

    const organiseInput = (e) => {
        setInput(e.target.value)
    }

    const add = () => {
        const inputArray = input.split('#')
        const title = inputArray[0]
        const tags = [];
        for(let i=1; i<inputArray.length; i++){
            tags.push(inputArray[i])
        }
        dispatch(addList({ title, tags }))
        setInput('')
    }

    const reset = () => {
        dispatch(resetState())
        setReset(prev => !prev)
        console.log(res)        
    }

    return (
        <Container>
            <AppBar className={classes.appBar} position='static' color='primary'>
                <Toolbar className={classes.toolBar} >
                    <Typography variant='h6' className={classes.heading}>
                        Welcome to Todo List
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Grid container alignContent='center' justifyContent='center'>
                
                <Grid item sm={4} md={4} lg={4}>
                    
                    <TextField
                        fullWidth 
                        name='input' 
                        value={input}
                        onChange={(e) => organiseInput(e)} 
                        placeholder='Enter the item.' 
                    />
                </Grid>

                <Grid item sm={2} md={1} lg={1}>
                    <Button
                        type='submit' 
                        className={classes.button} 
                        variant='contained' 
                        color='primary'
                        onClick={add} 
                        endIcon={<Add />}
                    >
                        Add
                    </Button>
                </Grid>  

                    <Button
                        className={classes.button}
                        variant='contained'
                        color='secondary'
                        onClick={reset}
                    >
                        Reset
                    </Button>      
            </Grid>
            
            <Lists />
        </Container>
    )
}

export default Home
