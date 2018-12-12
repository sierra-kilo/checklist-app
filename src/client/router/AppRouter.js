import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import HomePage from '../components/HomePage'
import ChecklistView from '../components/ChecklistView'
import ChecklistPage from '../components/ChecklistPage'
import ItemPage from '../components/ItemPage'

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
            <Route path='/checklist' component={ChecklistPage} />
            <Route path='/item' component={ItemPage}/>
            <Route path='/checklist-item/:id' component={ChecklistView} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default AppRouter;
