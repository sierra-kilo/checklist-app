import React, { Component } from 'react';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    // this.state = ;

    this.postItem = this.postItem.bind(this)

  }

  postItem = (callback) => {
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
    .then(callback)
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err));
  }

  render() {
    return (
      <div>
        <h2>Add Item</h2>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log('clicked');
              this.postItem(this.props.onAdd)
            }}
          >
            <input id='itemName' type='text' placeholder='name'></input>
            <input id='itemDescription' type='text'  placeholder='description'></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

export default ItemForm
