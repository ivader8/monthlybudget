import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div class="navigationBar" align="right">
                <button type="button" class="btn btn-outline-primary btn-rounded waves-effect">Login</button>
                <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#47a3da" }}>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Next Month</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Last Month</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

