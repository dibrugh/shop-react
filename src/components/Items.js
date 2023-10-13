import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => (
                    // Передаём текущий элемент, с которым взаимодействуем
                    <Item key={el.id} item={el}/>
                ))}
            </main>
        )
    }
}

export default Items