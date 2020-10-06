import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Header() {
    return (
        
        <div className="header">
            <section className="inner-section">
                <div className="logo">
                    <img src="./persona/assets/logo.png" alt="logo" />
                </div>
                <div className="menu">
                    <div className="inner-list">
                        <ul className="list-group">
                            <li className="item">
                                <a href="#">About Me</a>
                            </li>
                            <li className="item">
                                <a href="#">Lorem</a>
                            </li>
                            <li className="item">
                                <a href="#">Services</a>
                            </li>
                            <li className="item">
                                <a href="#">Projects</a>
                            </li>
                            <li className="item">
                                <a href="#">Lorem</a>
                            </li>
                            <li className="item">
                                <a href="#">Lorem</a>
                            </li>
                            <li className="item">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Header;