import React from 'react'

export default function Header() {
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
            </div>
            {/* banner */}
            <div className='presentation'></div>
        </header>
    )
}
