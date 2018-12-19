import React, { Component } from 'react';

const deleteItem = (item_id, callback) => {
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
  .then(callback)
  // .then(res => res.json())
  // .then(response => console.log('Success:', JSON.stringify(response)))
  // .catch(err => console.error('Error:', err));
}


const Item = ({itemName, itemDescription, itemId, onDelete, checklistEditView, addChecklistItem, checklistId}) => (
  <tr>
    <td>{ itemName }  </td>
    <td>{ itemDescription }  </td>
    <td>{ itemId }  </td>
    {checklistEditView === false &&
      <td>
        <button
          onClick={(e) => {
              e.preventDefault()

              deleteItem(itemId, onDelete)
            }
          }
        > Delete</button>
    </td>}
    {checklistEditView === true &&
      <td>
        <button
          onClick={(e) => {
            e.preventDefault()
            addChecklistItem(checklistId, itemId)
          }}
        > Add </button>
      </td>
      }
  </tr>
);

export default Item
