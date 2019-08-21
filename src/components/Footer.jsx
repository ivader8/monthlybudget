import React, { Component } from 'react'
import logo from '.././images/logo.svg'

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="container">
                    <a href="#">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                    <p className="address">Dondukov 12, Sofia 10000 <br/>Bulgaria</p>
                    <ul className="footer-links">
                        <li><a href="#">Terms of Service </a></li>
                        <li><a href="#">  Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;