import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function About() {
    return (
        <div className="about">
            <section className="inner-section">
                <div className="left-section"></div>
                <div className="right-section">
                    <div className="right-inner-section">
                        <h1>About Me</h1>
                        <span className="headline-tag">I'm available for freelance projects, remote work or just for discussion. Have any project in mind?</span>
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button>Contact Me</button> 
                        <button>Contact Me</button>
                    </div>                    
                </div>                
            </section>
        </div>
    )
}

export default About;