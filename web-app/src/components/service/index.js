import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Service() {
    return (
        <div className="service">
            <section className="inner-section">
                <div className="service-header">
                    <span>What I do</span>
                    <h1>Specilizing In</h1>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill" style={{backgroundColor: 'rgb(180, 223, 247)'}}>
                                <img src="/persona/assets/services/design.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>UI/UX</h4>
                            <p>Landing Pages, User Flow, Wireframing, Prototyping, Mobile/Web App Design</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill" style={{backgroundColor: 'rgb(208, 199, 250)'}}>
                                <img src="/persona/assets/services/development.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>Development</h4>
                            <p>Front-end, Back-end, Animation, WordPress, Responsive Websites</p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill" style={{backgroundColor: 'rgb(255, 198, 181)'}}>
                                <img src="/persona/assets/services/machine-learning.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>AI and Machine Learning</h4>
                            <p>Neural Networking, Deep Learning, Pattern Recognition, NLP, Robotics, Expert Systems</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill" style={{backgroundColor: 'rgb(255, 213, 230)'}}>
                                <img src="/persona/assets/services/testing.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>Testing</h4>
                            <p>User Experience Testing, Functionality Testing, Security Testing, Performance and Load Testing and Automation Testing</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill" style={{backgroundColor: 'rgb(200, 243, 194)'}}>
                                <img src="/persona/assets/services/cloud-services.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>Cloud Services</h4>
                            <p>Web hosting and Database, Single Sign-On, Backup Services, Web Services, Networking, Mobility</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill" style={{backgroundColor: 'rgb(255, 220, 167)'}}>
                                <img src="/persona/assets/services/devops.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>Devops</h4>
                            <p>Configuration Management, Continuous Integration, Continuous Deployment, Continuous Testing, Monitoring, Reporting</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service;