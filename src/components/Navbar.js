import React, { Component } from 'react'
import logo from '../images/logo.svg'
import ham from '../images/ham.svg'
import exit from '../images/exit.svg'

export default class Navbar extends Component {
     

    render() {

        function showMenu(e){
        e.preventDefault();
        let nav = document.getElementById('nav');
        nav.classList.toggle('hide-mobile');
    }

    function hideMenu(e){
        console.log('kur')
        e.preventDefault();
        let nav = document.getElementById('nav');
        nav.classList.add('hide-mobile');
    }


        return (
            <div className="container">
                <header>
                    <img src={logo} alt="yBudget logo" className="logo" />
                    <nav>
                        <a href="#" className="hide-desktop" onClick={showMenu}>
                            <img src={ham} alt="toggle menu" className="menu" id="menu" />
                        </a>

                        <ul className="show-desktop hide-mobile" id="nav">
                            <li id="exit" className="exit-btn hide-desktop">
                                <img src={exit} alt = "exit menu" onClick={hideMenu}></img></li>
                            <li><a href="/currentMonth">calculate</a></li>
                            <li><a href="#">home</a></li>
                            <li><a href="#">contact</a></li>
                        <li><a href="#">about</a></li>

                        </ul>
                    </nav>
                </header>
            </div>

        )
    }
}

