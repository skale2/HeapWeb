import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home.js'

export default class App extends React.Component {
  render() {
    return(
      <main>
        <Switch>
          <Route path='' render={() => <Home/>} />
        </Switch>
      </main>
    );
  }
}