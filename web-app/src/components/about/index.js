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
    description: "<span>I'm Full Stack JavaScript Engineer with interest in Data Science and building unique modern mobile web apps. For over 3.7+ years, I've worked on multiple projects across different industries like Finance, Real Estate, Travel, ECommerce and assisting clients from all over the globe.<\/span><br\/><span>Currently, I work as a Software Engineer, delivering products and services for our customers through developing, testing, maintaining software applications using the agile methodology.<\/span><br\/><span><strong>Competencies:<\/strong> <i>Data Science, Machine Learning, Python, Deep Learning, Web\/Mobile Development, MEAN\/MERN Stack, Web Analytics, & Web Services<\/i><\/span>",
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
                                <a href="https://www.facebook.com/denisroystan03" target="_blank" rel="noopener noreferrer" className="deg0">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/fb.png" className="facebook" />
                                </a>
                                <a href="https://www.instagram.com/denisroystan/" target="_blank" rel="noopener noreferrer" className="deg45">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/ig.png" className="instagram" />
                                </a>
                                <a href="https://in.linkedin.com/in/denisroystan" target="_blank" rel="noopener noreferrer" className="deg135"> 
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/in.png" className="linkedin" />
                                </a>
                                <a href="https://twitter.com/denisroystan" target="_blank" rel="noopener noreferrer" className="deg180">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/tw.png" className="twitter" />
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=919619065737" target="_blank" rel="noopener noreferrer" className="deg225">
                                    <div className="shine-me"></div>
                                    <img src="/persona/assets/wa.png" className="whatsapp" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="deg315">
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
                            to="experience"
                            >
                                { aboutData.button1 }
                            </HashLink>
                        </button> 
                        <button className="resume">
                            <a href="/persona/documents/Denis-Dalmeida-CV.pdf" target="_blank" rel="noopener noreferrer">{ aboutData.button2 }</a>                            
                        </button>
                    </div>                    
                </div>                
            </section>
        </div>
    )
}

export default About;