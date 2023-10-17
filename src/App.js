import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

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
          category: 'light',
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
      orders: [],
      // Сначала показываем все элементы, а дальше уже будут мутации, которые не повлияют на основной массив. 
      // Поэтому в компонент Items передаём currentItems 
      currentItems: [],
      showFullItem: false,
      // Отображаемый товар (модалка)
      fullItem: {

      }
    }
    this.state.currentItems = this.state.items;
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem} />

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem = (item) => {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory = (category) => {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      // Фильтруем items, а не currentItems дабы не было одноразовой фильтрации
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
