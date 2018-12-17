import React, { Component } from 'react';

class AddChecklistForm extends Component {
  constructor(props) {
    super(props);
    // this.state = ;

    this.postChecklist = this.postChecklist.bind(this)

  }

  postChecklist = (callback) => {
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
    .then(callback)
    // .then(res => res.json())
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(err => console.error('Error:', err));
  }

  render() {
    return (
      <div>
        <h2>Add Checklist</h2>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log('clicked');
              this.postChecklist(this.props.onAdd)
            }}
          >
            <input id='name' type='text' placeholder='name'></input>
            <input id='description' type='text'  placeholder='description'></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

export default AddChecklistForm
