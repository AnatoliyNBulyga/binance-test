import React from 'react'
import { Link } from 'react-router-dom'
import Binance from '../assets/icons/Binance.svg'

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={Binance} height="25" alt="Binance Logo" />
            </Link>
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    </header>
);

export default Header;