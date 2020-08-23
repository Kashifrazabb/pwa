import React from 'react'
import {AppBar,Toolbar,List,ListItem,ListItemText} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    list:{display:'flex',margin:'0 auto'}
    

}))

export const Navbar = () => {
    const classes=useStyles()
    return (
        <AppBar>
            <Toolbar>
                <List className={classes.list}>
                    <ListItem button component={Link} to='/'><ListItemText primary='HOME'/></ListItem>
                    <ListItem button component={Link} to='/services'><ListItemText primary='SERVICES'/></ListItem>
                    <ListItem button component={Link} to='/about'><ListItemText primary='ABOUT'/></ListItem>
                </List>
            </Toolbar>
        </AppBar>
    )
}
