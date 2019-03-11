import React from 'react'

class GroceryForm extends React.Component {
    state = { name: '' }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.name)
        this.setState({ name: '' })
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        const { name } = this.state

        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={name}
                    name='name'
                    onChange={this.handleChange}
                    required 
                    placeholder="Add an Item" 
                />
            </form>
        )
    }
}

export default GroceryForm