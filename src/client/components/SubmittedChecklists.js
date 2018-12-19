import React, { Component } from 'react';

class SubmittedChecklists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submittedChecklists: []
    }
    this.fetchSubmittedChecklists = this.fetchSubmittedChecklists.bind(this)
  }

  componentDidMount() {
    this.fetchSubmittedChecklists()
  }

  fetchSubmittedChecklists = () => {
    fetch('/api/submitted-checklists')
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(checklists => ({
        name: `${checklists.name}`,
        id: `${checklists.id}`,
        checklist_id: `${checklists.checklist_id}`,
        time_submitted: `${checklists.time_submitted}`
      })))
      .then(checklists => this.setState({submittedChecklists: checklists}))
  }

  render() {
    return (
      <div>
        <h1>Submitted Checklists Page</h1>
        <div>
          <table>
            <tbody>
              {this.state.submittedChecklists.map((submittedChecklist) => {
                return (
                  <tr>
                    <td>{submittedChecklist.id}</td>
                    <td>{submittedChecklist.checklist_id}</td>
                    <td>{submittedChecklist.name}</td>
                    <td>{submittedChecklist.time_submitted}</td>
                  </tr>
               )})}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default SubmittedChecklists;
