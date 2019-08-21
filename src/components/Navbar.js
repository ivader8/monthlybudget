import React, { Component } from 'react'
import logo from '../images/logo.svg'
import ham from '../images/ham.svg'
import exit from '../images/exit.svg'

export default class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <img src={logo} alt="yBudget logo" className="logo" />
                    <nav>
                        <a href="#" className="hide-desktop">
                            <img src={ham} alt="toggle menu" className="menu" id="menu" />
                        </a>

                        <ul className="show-desktop hide-mobile" id="nav">
                            <li id="exit" class="exit-btn hide-desktop">
                                <img src={exit} alt = "exit menu"></img></li>
                            <li><a href="#">contact</a></li>
                            <li><a href="#">home</a></li>
                            <li><a href="#">services</a></li>
                        <li><a href="#">about</a></li>

                        </ul>
                    </nav>
                </header>
            </div>

        )
    }
}

