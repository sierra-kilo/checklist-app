import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import HomePage from '../components/HomePage'
import ChecklistDetailView from '../components/ChecklistDetailView'
import Checklists from '../components/Checklists'
import ItemPage from '../components/ItemPage'
import SubmittedChecklists from '../components/SubmittedChecklists'
import SubmittedChecklistDetailView from '../components/SubmittedChecklistDetailView'

import TestForm from '../components/TestFormSer'

class AppRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to={'/checklist'}> Checklist Page </Link>
          ||
          <Link to={'/item'}> Item Page </Link>
          ||
          <Link to={'/submitted-checklists'}> Submitted Checklists </Link>
          <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/checklist' component={Checklists} />
            <Route path='/item' component={ItemPage}/>
            <Route path='/checklist-item/:id' component={ChecklistDetailView} />
            <Route path='/test-form' component={TestForm}/>
            <Route path='/submitted-checklists' component={SubmittedChecklists} />
            <Route path='/submitted-checklist/:id' component={SubmittedChecklistDetailView} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default AppRouter;
