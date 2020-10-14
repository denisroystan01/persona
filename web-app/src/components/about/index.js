import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

// Plugins
import { HashLink } from 'react-router-hash-link';

function About() {
    return (
        <div className="about">
            <section className="inner-section">
                <div className="left-section">
                    <div className="left-inner-section">
                        <div className="social-sphere">
                            <div className="social-icons">
                                <a href="https://www.facebook.com/denisroystan03" target="_blank" className="deg0">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/fb.png" className="facebook" />
                                </a>
                                <a href="https://www.instagram.com/denisroystan/" target="_blank" className="deg45">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/ig.png" className="instagram" />
                                </a>
                                <a href="https://in.linkedin.com/in/denisroystan" target="_blank" className="deg135"> 
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/in.png" className="linkedin" />
                                </a>
                                <a href="https://twitter.com/denisroystan" target="_blank" className="deg180">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/tw.png" className="twitter" />
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=919619065737" target="_blank" className="deg225">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/wa.png" className="whatsapp" />
                                </a>
                                <a href="#" target="_blank" className="deg315">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/yt.png" className="youtube" />
                                </a>
                            </div>
                            <div className="neumorphism-circle"></div>
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
                        <button className="know-more">                            
                            <HashLink
                            smooth 
                            elementId="experience"
                            >
                                Know More
                            </HashLink>
                        </button> 
                        <button className="resume">
                            <HashLink to="#">Download CV</HashLink>                            
                        </button>
                    </div>                    
                </div>                
            </section>
        </div>
    )
}

export default About;