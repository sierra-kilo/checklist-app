import React, { Component } from 'react';

class checklistItem extends Component {

  constructor(props) {
    super(props);
    // this.state = ;
  }

  render() {
    return (
      <li>
      {this.props.itemName}, {this.props.itemDescription} <input type="radio" name={this.props.itemId} value={1} /> YES
      <input type="radio" name={this.props.itemId} value={2}/> NO
      <input type="radio" name={this.props.itemId} value={3}/> N/A
      </li>
    );
  }

}

export default checklistItem;
