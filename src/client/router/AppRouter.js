import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage'

const AppRouter = () => (
  <BrowserRouter>
    <div className='flex-holder'>
      <main>
        <Switch>
          <Route path='/' component={HomePage} exact={true} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
)

export default AppRouter;
