import React from 'react'

const Grocery = ({ id, name, complete, groceryClick }) => (
    <li
        style={ complete ? { ...styles.complete} : {...styles.grocery} }
        onClick={ () => groceryClick(id) }
    >
        { name }
    </li>
)

const styles = {
    grocery: { cursor: 'pointer' },
    complete: { color: 'grey', textDecoration: 'line-through' }
}

export default Grocery
