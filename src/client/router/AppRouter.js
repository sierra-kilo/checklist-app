import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from '../components/HomePage'
import ChecklistView from '../components/ChecklistView'
import ChecklistPage from '../components/ChecklistPage'
import ItemPage from '../components/ItemPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Link to={'/checklist'}> Checklist Page </Link>
      <Link to={'/item'}> Item Page </Link>
      <Link to={'/checklistItem/118'}> Checklist View Page </Link>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/checklistItem/:id' component={ChecklistView} />
        <Route path='/checklist' component={ChecklistPage} />
        <Route path='/item' component={ItemPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
