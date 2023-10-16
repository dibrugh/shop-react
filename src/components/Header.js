import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += +el.price);
    return (<div>
        {props.orders.map(el => (
            <Order
                key={el.id}
                item={el}
                onDelete={props.onDelete}
            />
        ))}
        <p className='sum'>Сумма: {sum.toFixed(2)}$</p>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Товаров нет</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            {/* logo */}
            <div>
                <span className='logo'>House staff</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart className={`shop-cart-button ${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            {/* banner */}
            <div className='presentation'></div>
        </header>
    )
}
