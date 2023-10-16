import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул белый',
          img: 'white-chair.jpg',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стул черный',
          img: 'dark-chair.jpg',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          category: 'lamps',
          price: '19.99'
        },
        {
          id: 4,
          title: 'Стол белый',
          img: 'white-table.jpg',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 5,
          title: 'Стол черный',
          img: 'dark-table.jpg',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 6,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          category: 'sofas',
          price: '249.99'
        },
      ],
      orders: [

      ],
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder = (item) => {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }

  deleteOrder = (id) => {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
}

export default App;
