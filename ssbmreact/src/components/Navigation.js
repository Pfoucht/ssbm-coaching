import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <a className="main-nav__link" href="/">Sign In</a>
                </li>
                <li className="main-nav__item">
                    <a className="main-nav__link" href="/">Register</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;