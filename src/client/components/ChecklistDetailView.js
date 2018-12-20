import React, { Component } from 'react'
import Item from './Item'
import ChecklistItem from './ChecklistItem'
import ItemPage from './ItemPage'
var serialize = require('form-serialize');

class ChecklistDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklistItems: [],
      checklistInfo: {},
      editView: false
    };

    this.fetchItems = this.fetchItems.bind(this)
    this.fetchChecklist = this.fetchChecklist.bind(this)
    this.submitChecklist = this.submitChecklist.bind(this)
    this.getSubmittionValues = this.getSubmittionValues.bind(this)
    this.submitItems = this.submitItems.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.toggleEditView = this.toggleEditView.bind(this)
    this.removeChecklistItem = this.removeChecklistItem.bind(this)

  }

  componentDidMount() {
    const checklistId = this.props.match.params.id
    this.fetchItems(checklistId)
    this.fetchChecklist(checklistId)
  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.match.params.id !== prevProps.match.params.id) {
    const checklistId = this.props.match.params.id
    this.fetchItems(checklistId);
    this.fetchChecklist(checklistId)

  }
}

  fetchItems = (id) => {
    fetch("/api/checklist-item/" + id)
    .then(res => res.json())
    // .then(parsedJSON => console.log(parsedJSON))
    .then(parsedJSON => parsedJSON.map(items => ({
      checklistId: `${items.checklist_id}`,
      itemId: `${items.item_id}`,
      itemName: `${items.name}`,
      itemDescription: `${items.description}`
    })))
    .then(items => this.setState({checklistItems: items}))
    // .then(console.log(state.checklistItems))
  }

  fetchChecklist = (id) => {
    fetch("/api/checklist/" + id)
    .then(res => res.json())
    .then(parsedJSON => (parsedJSON.rows[0]))
    .then(info => this.setState({checklistInfo: info}))
  }

  submitChecklist = (checklist_id) => {
    return new Promise(resolve => {
      fetch('/api/submit-checklist', {
        method: 'POST',
        body: JSON.stringify(
          {
            'checklist_id': checklist_id
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json()
      })
      .then(result => {
        let id =  result.rows[0].id
        resolve(id)
        // console.log(id)
      })
    })
  }

  getSubmittionValues = (submitted_checklist_id) => {
    return new Promise(resolve => {
      var form = document.querySelector('.submittionForm');
      var obj = serialize(form, { hash: true });
      var result = Object.keys(obj).map(function(key) {
        return [submitted_checklist_id, key, obj[key]];
      })
      resolve(result)
    })
  }

  submitItems = (values) => {
    fetch('/api/submitted-item', {
      method: 'POST',
      body: JSON.stringify(
        {
          "values": values
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      console.log(result)
    })
  }

  // async function submitForm() {
  //   let id = await this.submitChecklist(this.state.checklistInfo.id)
  //   let values = await this.getSubmittionValues(id)
  //   let result = await submitItems(values)
  //   return result'
  // }

  submitForm = () => {
    this.submitChecklist(this.state.checklistInfo.id)
    .then(id => this.getSubmittionValues(id))
    .then(values => this.submitItems(values))
  }

  toggleEditView = () => {
    if (this.state.editView === true) {
      this.setState({editView: false})
    } else this.setState({editView: true})
  }

  removeChecklistItem = (checklist_id, item_id) => {
    fetch('/api/checklist-item', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'checklist_id': checklist_id,
        'item_id': item_id
      })
    })
    .then(() => {this.fetchItems(this.state.checklistInfo.id)})
  }

  addChecklistItem = (checklist_id, item_id) => {
    fetch('/api/checklist-item', {
      method: 'POST',
      body: JSON.stringify(
        {
          "checklist_id": checklist_id,
          "item_id": item_id
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {this.fetchItems(this.state.checklistInfo.id)})
  }

  render() {
    return (
      <div>
        <h1>Checklist Name: {this.state.checklistInfo.name}</h1>
        <h2>Checklist Description: {this.state.checklistInfo.description}</h2>
        <button onClick={this.toggleEditView}>  EDIT </button>
        <div>
          <form className='submittionForm'
            onSubmit={(e) => {
              e.preventDefault()
              this.submitForm()
              this.props.history.push('/')
            }
          }>
            <ul>
              {this.state.checklistItems.map((item) => {
                return (
                      <ChecklistItem
                        key={item.itemId}
                        itemId={item.itemId}
                        itemName={item.itemName}
                        itemDescription={item.itemDescription}
                        editView={this.state.editView}
                        checklistId={this.state.checklistInfo.id}
                        removeChecklistItem={this.removeChecklistItem}
                      />
               )}
              )}
            </ul>
            <button type='submit'>Submit</button>
          </form>
        </div>
        {this.state.editView === true &&
          <ItemPage
            checklistEditView={this.state.editView}
            addChecklistItem={this.addChecklistItem}
            checklistId={this.state.checklistInfo.id}
          />}
      </div>
    )
  }
}

export default ChecklistDetailView;
