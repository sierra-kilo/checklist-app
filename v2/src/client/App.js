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
  this.postChecklist = this.postChecklist.bind(this)

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

  postChecklist = (e) => {
    fetch('/api/checklist', {
      method: 'POST',
      body: JSON.stringify(
        {
          'name': document.getElementById('name').value,
          'description': document.getElementById('description').value}), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className='list-view-collection'>
        <div>
        <h2>Add Checklist</h2>
        <div>
          <form
          onSubmit={(e) => {
            e.preventDefault()
            this.postChecklist()
            .then(this.fetchCheckLists())
          }}
          >
            <input id='name' type='text' placeholder='name'></input>
            <input id='description' type='text'  placeholder='description'></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
        </div>
        <div>
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
      </div>
    );
  }
}
