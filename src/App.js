import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Services } from './components/Services'
import { About } from './components/About'

export const App = () =>
    <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/about' component={About} />
        </Switch>
    </>

