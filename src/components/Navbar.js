import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navigationBar" align="right">
                <button type="button" className="btn btn-outline-primary btn-rounded waves-effect">Login</button>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#47a3da" }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="nextMonth">Next Month</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Last Month</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

