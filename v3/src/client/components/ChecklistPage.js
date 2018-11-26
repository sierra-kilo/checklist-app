import React, { Component } from 'react';
import ChecklistForm from './ChecklistForm'
import Checklist from './Checklist'

class ChecklistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecklists: []
    };

    this.fetchChecklists = this.fetchChecklists.bind(this)

  }

  componentDidMount() {
    this.fetchChecklists()
  }

  fetchChecklists = () => {
    fetch("/api/checklist")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(checklists => ({
        name: `${checklists.name}`,
        id: `${checklists.checklist_id}`,
        description: `${checklists.description}`
      })))
      .then(checklists => this.setState({allChecklists: checklists}))
  }

  render() {
    return (
      <div>
        <ChecklistForm
          onAdd={() => this.fetchChecklists()}
        />
        <h2>Checklists</h2>
        <div>
          <table className='collection'>
            <tbody>
              {this.state.allChecklists.map((checklist) => {
                return (
                  <Checklist
                    key={checklist.id}
                    checklistId={checklist.id}
                    checklistName={checklist.name}
                    checklistDescription={checklist.description}
                    onDelete={() => this.fetchChecklists()}
                  />
               )})}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default ChecklistPage;