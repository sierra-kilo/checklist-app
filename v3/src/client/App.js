import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allChecklists: [],
      allItems: []
    }

  this.fetchChecklists = this.fetchChecklists.bind(this)
  this.postChecklist = this.postChecklist.bind(this)
  this.deleteChecklist = this.deleteChecklist.bind(this)
  this.fetchItems = this.fetchItems.bind(this)
  // this.postItem = this.postItem.bind(this)
  // this.deleteItem = this.deleteItem.bind(this)

  }

  componentDidMount() {
    this.fetchChecklists()
    this.fetchItems()
  }

  fetchChecklists = () => {
    fetch("/api/checklist")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(checklists => ({
        checklist: `${checklists.name}`,
        id: `${checklists.checklist_id}`
      })))
      .then(checklists => this.setState({allChecklists: checklists}))
  }

  fetchItems = () => {
    fetch('/api/item')
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(item => ({
        item: `${item.name}`,
        id: `${item.item_id}`
      })))
      .then(items => this.setState({allItems: items}))
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
    })
    .then(location.reload())
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err));
  }

  postItem = (e) => {
    fetch('/api/item', {
      method: 'POST',
      body: JSON.stringify(
        {
          'name': document.getElementById('itemName').value,
          'description': document.getElementById('itemDescription').value}), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(location.reload())
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err));
  }

  deleteChecklist = (checklist_id) => {
    fetch('/api/checklist', {
      method: 'DELETE',
      body: JSON.stringify(
        {
          'id': checklist_id,
        }), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(location.reload())
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err));
  }

  deleteItem = (item_id) => {
    fetch('/api/item', {
      method: 'DELETE',
      body: JSON.stringify(
        {
          'id': item_id,
        }), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(location.reload())
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err));
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
            <table className='collection' style={{margin: "0px auto"}}>
              <tbody>
                {this.state.allChecklists.map((checklist) => {
                  return (
                    <tr>
                      <td>{ checklist.checklist }  </td>
                      <td className='id'>{ checklist.id }  </td>
                      <td>
                        <button onClick={e => {
                          e.preventDefault()
                          this.deleteChecklist(checklist.id)}}
                        >
                        Delete</button>
                      </td>
                   </tr>
                 )})}
              </tbody>
            </table>
          </div>
        </div>
        <hr></hr>
        <div>
          <h2>Add Item</h2>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                this.postItem()
              }}
            >
              <input id='itemName' type='text' placeholder='name'></input>
              <input id='itemDescription' type='text'  placeholder='description'></input>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div>
            <h2>Item List</h2>
            <div>
              <table className='collection' style={{margin: "0px auto"}}>
                <tbody>
                  {this.state.allItems.map((item) => {
                    return (
                      <tr>
                        <td>{ item.item }  </td>
                        <td className='id'>{ item.id }  </td>
                        <td>
                          <button onClick={e => {
                            e.preventDefault()
                            this.deleteItem(item.id)}}
                          >
                          Delete</button>
                        </td>
                     </tr>
                   )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
