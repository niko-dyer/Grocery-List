import React from 'react'
import Grocery from './Grocery'

const List = ({ items, name, groceryClick }) => (
    <div>
        <h2>{name}</h2>
        <ul>
            { items.map( item => <Grocery key={item.id} {...item} groceryClick={groceryClick} />) }
        </ul>
    </div>
)

export default List