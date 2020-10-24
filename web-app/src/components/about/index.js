import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

// Plugins
import { HashLink } from 'react-router-hash-link';

var aboutData = {
    greetTag: 'Hello I\'m',
    name: 'Denis Roystan',
    title: ['Software Engineer', 'Data Scientist'],
    description: "<span>I'm a Full Stack Javascript Engineer with interest in Data Science and building unique modern mobile web app's. For over 3.7+ years, I've been working on multiple projects across different industries like Finance, Real Estate, Travel, Ecommerce from all over the globe.<\/span><br\/><span>Currently, I work as a software engineer, delivering products and services for our customers through developing, testing, maintaining software applications using the agile methodology.<\/span><br\/><span><strong>Competencies:<\/strong> <i>Data Science, Machine Learning, Python, Deep Learning, Web\/Mobile Development, MEAN\/MERN Stack, Web Analytics, & Web Services<\/i><\/span>",
    button1: 'Know More',
    button2: 'Get CV'
}

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
                        <span className="greet-tag">{ aboutData.greetTag }</span>
                        <h1>{ aboutData.name }</h1>
                        <span className="headline-tag">
                            {aboutData.title.map((title, index) => {
                                return (<span key={index}>{title}</span>)
                            })}                            
                        </span>
                        <p className="bio" dangerouslySetInnerHTML={{__html: aboutData.description}}>
                            
                        </p>
                        <button className="know-more">                            
                            <HashLink
                            smooth 
                            elementId="experience"
                            >
                                { aboutData.button1 }
                            </HashLink>
                        </button> 
                        <button className="resume">
                            <HashLink to="#">{ aboutData.button2 }</HashLink>                            
                        </button>
                    </div>                    
                </div>                
            </section>
        </div>
    )
}

export default About;