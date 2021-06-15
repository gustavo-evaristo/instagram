import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/home'
import New from './pages/new'

function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/new" exact component={ New } />
        </Switch>
    )
}

export default Routes