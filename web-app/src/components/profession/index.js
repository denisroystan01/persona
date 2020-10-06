import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Profession() {
    return (
        <div className="profession">
            <section className="inner-section">
                <section className="inner-section-left">
                    <div>
                        <h1>I do much more than just <br />work</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>                    
                </section>
                <section className="inner-section-right">
                    <div className="first-section">
                        <div className="interest">
                            <img src="https://www.iconfinder.com/data/icons/neutro-essential/32/link-24.png" alt="interest"/>
                            <span>Blog</span>
                        </div>
                        <div className="interest">
                            <img src="https://www.iconfinder.com/data/icons/neutro-essential/32/link-24.png" alt="interest"/>
                            <span>Youtube</span>
                        </div>
                    </div>
                    <div className="second-section">
                        <div className="interest">
                            <img src="https://www.iconfinder.com/data/icons/neutro-essential/32/link-24.png" alt="interest"/>
                            <span>Freelance</span>
                        </div>
                        <div className="interest">
                            <img src="https://www.iconfinder.com/data/icons/neutro-essential/32/link-24.png" alt="interest"/>
                            <span>Gaming</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Profession;