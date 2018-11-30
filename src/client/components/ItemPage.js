import React, { Component } from 'react';
import ItemForm from './ItemForm'
import Item from './Item'

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: []
    };

    this.fetchItems = this.fetchItems.bind(this)

  }

  componentDidMount() {
    this.fetchItems()
  }

  fetchItems = () => {
    fetch("/api/item")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(items => ({
        name: `${items.name}`,
        id: `${items.id}`,
        description: `${items.description}`
      })))
      .then(items => this.setState({allItems: items}))
  }

  render() {
    return (
      <div>
        <ItemForm
          onAdd={() => this.fetchItems()}
        />
        <h2>Items</h2>
        <div>
          <table className='collection'>
            <tbody>
              {this.state.allItems.map((item) => {
                return (
                  <Item
                    key={item.id}
                    itemId={item.id}
                    itemName={item.name}
                    itemDescription={item.description}
                    onDelete={() => this.fetchItems()}
                  />
               )})}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default ItemPage;
