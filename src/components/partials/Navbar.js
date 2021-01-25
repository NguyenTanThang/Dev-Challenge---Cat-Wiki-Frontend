import React, { Component } from 'react';
import logo from "../../img/CatwikiLogo.svg";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a href="/">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
