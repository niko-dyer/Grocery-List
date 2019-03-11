import React from 'react'
import './App.css'
import List from './List'
import GroceryForm from './GroceryForm'

class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: 'Apples', complete: true },
      { id: 2, name: 'Bananas', complete: false },
      { id: 3, name: 'Cereal', complete: false }
    ]
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addItem = (name) => {
    const { groceries } = this.state
    const grocery = { name, id: this.getId(), complete: false }
    this.setState({ groceries: [grocery, ...groceries] })
  }

  handleClick = (id) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery 
      })
    })
  }

  render() {
    const { groceries } = this.state

    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name='Grocery List' items={groceries} groceryClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
