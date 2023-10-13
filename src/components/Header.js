import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
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
                        
                    </div>
                )}
            </div>
            {/* banner */}
            <div className='presentation'></div>
        </header>
    )
}
