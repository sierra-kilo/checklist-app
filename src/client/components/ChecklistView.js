import React, { Component } from 'react';
import Item from './Item'

class ChecklistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklistItems: [],
      checklistInfo: {}
    };

    this.fetchItems = this.fetchItems.bind(this)
    this.fetchChecklist = this.fetchChecklist.bind(this)

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

  render() {
    return (
      <div>
        <h1>Checklist Name: {this.state.checklistInfo.name}</h1>
        <h2>Checklist Description: {this.state.checklistInfo.description}</h2>
        <div>
          {this.state.checklistItems.map((item) => {
            return (
              <h3 key={item.itemId}>{item.itemName} || {item.itemDescription}</h3>
           )})}
        </div>
      </div>
    );
  }

}

export default ChecklistView;
