import React, { Component } from 'react';

class SubmittedChecklistDetailView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted_checklist_id: this.props.match.params.id
    };
  }

  render() {
    return (
      <div>
        <h1> {this.state.submitted_checklist_id} </h1>
      </div>
    );
  }

}

export default SubmittedChecklistDetailView;
