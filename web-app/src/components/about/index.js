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
                        <span className="greet-tag">Hello I'm</span>
                        <h1>Denis Roystan</h1>
                        <span className="headline-tag">
                            <span>Software Engineer</span>
                            <span>Data Scientist</span>
                        </span>
                        <p className="bio">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            <br/>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </p>
                        <button>Know More</button> 
                        <button>Download CV</button>
                    </div>                    
                </div>                
            </section>
        </div>
    )
}

export default About;