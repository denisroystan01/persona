import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function About() {
    return (
        <div className="about">
            <section className="inner-section">
                <div className="left-section">
                    <div className="left-inner-section">
                        <div className="social-sphere">
                            <div className="social-icons">
                                <img src="/persona/assets/fb.png" className="facebook deg0" />
                                <img src="/persona/assets/ig.png" className="instagram deg45" />
                                <img src="/persona/assets/in.png" className="linkedin deg135" />
                                <img src="/persona/assets/tw.png" className="twitter deg180" />
                                <img src="/persona/assets/wa.png" className="whatsapp deg225" />
                                <img src="/persona/assets/yt.png" className="youtube deg315" />
                            </div>
                            <div class="neumorphism-circle"></div>
                        </div>                        
                    </div>
                </div>
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