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
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;
