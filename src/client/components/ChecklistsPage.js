import React, { Component } from 'react';
import AddChecklistForm from './AddChecklistForm'
import Checklist from './Checklist'

class ChecklistsPage extends Component {
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
        id: `${checklists.id}`,
        description: `${checklists.description}`
      })))
      .then(checklists => this.setState({allChecklists: checklists}))
  }

  render() {
    return (
      <div>
        <AddChecklistForm
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

export default ChecklistsPage;
