import React, { Component } from 'react';
import Item from './Item'

class ChecklistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklistItems: []
    };

    this.fetchItems = this.fetchItems.bind(this)

  }

  componentDidMount() {
    this.fetchItems(this.props.match.params.id)
  }

  fetchItems = (id) => {
    fetch("/api/checklistItem/" + id)
    .then(res => res.json())
    // .then(parsedJSON => console.log(parsedJSON))
    .then(parsedJSON => parsedJSON.map(items => ({
      checklistId: `${items.fk_checklist_checklist_id}`,
      itemId: `${items.fk_item_item_id}`,
      itemName: `${items.name}`,
      itemDescription: `${items.description}`
    })))
    .then(items => this.setState({checklistItems: items}))
    // .then(console.log(state.checklistItems))
  }

  render() {
    return (
      <div>
        <h1>Checklist ID: {this.props.match.params.id}</h1>
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
