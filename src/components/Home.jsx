import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    gap:{marginTop:64,textAlign:'center'}
})

export const Home = () => {
    const classes=useStyles()
    return (
        <div className={classes.gap}>
            <h1>H O M E</h1>
        </div>
    )
}
