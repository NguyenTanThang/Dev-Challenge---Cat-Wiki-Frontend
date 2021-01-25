import React, { Component } from 'react';
import logo from "../../img/CatwikiLogo.svg";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="footer-brand">
                            <a href="/">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <div className="footer-content">
                            <p>Tan Thang - devchallenge.io 2021</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
