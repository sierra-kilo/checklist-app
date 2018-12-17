import React, { Component } from 'react';

class checklistItem extends Component {

  constructor(props) {
    super(props);
    // this.state = ;
  }

  render() {
    return (
      <li>
      {this.props.itemName}, {this.props.itemDescription} <input type="radio" name={this.props.itemId} value="YES" /> YES
      <input type="radio" name={this.props.itemId} value="NO"/> NO
      <input type="radio" name={this.props.itemId} value="N/A"/> N/A
      </li>
    );
  }

}

export default checklistItem;
