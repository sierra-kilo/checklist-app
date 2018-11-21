import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allCheckLists: [],
    }

  this.fetchCheckLists = this.fetchCheckLists.bind(this)
  }

  componentDidMount() {
    this.fetchCheckLists()
  }

  fetchCheckLists = () => {
    fetch("/api/checklist")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(checklists => ({
        checklist: `${checklists.name}`,
        id: `${checklists.checklist_id}`
      }))).then(checklists => this.setState({allCheckLists: checklists}))
  }


  render() {
    return (
      <div className='list-view-collection'>
        <h2>Checklists</h2>
        <div>
          <ul className='collection'>
           {this.state.allCheckLists.map((checklist) => {
             return (
               <li>
                { checklist.checklist }, { checklist.id }
               </li>
             )
             })}

          </ul>

        </div>
      </div>
    );
  }
}
