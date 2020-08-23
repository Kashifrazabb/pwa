import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    gap:{marginTop:64,textAlign:'center'}
})

export const About = () => {
    const classes=useStyles()
    return (
        <div className={classes.gap}>
            <h1>A B O U T</h1>
        </div>
    )
}
