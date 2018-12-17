import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import HomePage from '../components/HomePage'
import ChecklistDetailView from '../components/ChecklistDetailView'
import ChecklistsPage from '../components/ChecklistsPage'
import ItemPage from '../components/ItemPage'
import TestForm from '../components/TestFormSer'

class AppRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to={'/checklist'}> Checklist Page </Link>
          ||
          <Link to={'/item'}> Item Page </Link>
          <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/checklist' component={ChecklistsPage} />
            <Route path='/item' component={ItemPage}/>
            <Route path='/checklist-item/:id' component={ChecklistDetailView} />
            <Route path='/test-form' component={TestForm}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default AppRouter;
