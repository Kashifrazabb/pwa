import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Grid, Container, Typography, Divider, Box } from '@material-ui/core'

const useStyles = makeStyles({
    gap: { marginTop: 64, textAlign: 'center' },
    heading: { marginTop: 100, color: 'crimson' },
    loading: {height:'100vh',lineHeight:'100vh',textAlign:'center'}
})

export const Services = () => {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [mode, setMode] = useState('online')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setData(res.data)
                localStorage.setItem('users', JSON.stringify(res.data))
                setMode('online')
            })
            .catch(() => {
                setData(JSON.parse(localStorage.getItem('users')))
                setMode('offline')
            })
    }, [])

    if (data.length===0) return <Typography variant='h1' className={classes.loading}>Loading ...</Typography>

    return (
        <Box component='div' className={classes.gap}>
            <Typography variant='h2' className={classes.heading}>S E R V I C E S</Typography>
            {mode === 'offline' && <Typography variant='h5' color='secondary'>You are in offline mode</Typography>}
            <Container>
                <Grid container>
                    <Grid item xs={3}><Typography variant='h4'>ID</Typography></Grid>
                    <Grid item xs={3}><Typography variant='h4'>Name</Typography></Grid>
                    <Grid item xs={3}><Typography variant='h4'>Email</Typography></Grid>
                    <Grid item xs={3}><Typography variant='h4'>Address</Typography></Grid>
                </Grid>
                <Divider />
                {data.map((i, k) =>
                    <Grid container key={k}>
                        <Grid item xs={3}><Typography variant='h5'>{i.id}</Typography></Grid>
                        <Grid item xs={3}><Typography variant='h5'>{i.name}</Typography></Grid>
                        <Grid item xs={3}><Typography variant='h5'>{i.email}</Typography></Grid>
                        <Grid item xs={3}><Typography variant='h5'>{i.address.street}</Typography></Grid>
                    </Grid>)}
            </Container>
        </Box>
    )
}
