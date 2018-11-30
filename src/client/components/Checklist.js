import React, { Component } from 'react';

const deleteChecklist = (checklist_id, callback) => {
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
  .then(callback)
  // .then(res => res.json())
  // .then(response => console.log('Success:', JSON.stringify(response)))
  // .catch(err => console.error('Error:', err));
}


const Checklist = ({checklistName, checklistDescription, checklistId, onDelete}) => (
  <tr>
    <td>{ checklistName }  </td>
    <td>{ checklistDescription }  </td>
    <td>{ checklistId }  </td>
    <td>
      <button
        onClick={(e) => {
            e.preventDefault()
            deleteChecklist(checklistId, onDelete)
          }
        }
      >Delete</button>
    </td>
  </tr>
);

export default Checklist
