import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Experience() {
    return (
        <div className="experience">
            <section className="inner-section">
                <div className="experience-item">
                    <div className="left">
                        <span>Morningstar</span>
                    </div>
                    <div className="center">
                        <h4>Software Engineer</h4>
                        <p>Currently, through Morningstar, I have gained expertise in banking and finance domain. I have created quick-maturing POC for the client's and also tweaked the morningstar deliverable products according to the client requirements in the client-specific configurations. We follow the agile methodology for better deliverance and continuous product development. I also attend scheduled client calls to provide support to their technical team or resolve live issues.</p>
                    </div>
                    <div className="right">
                        <span>2019 - Present</span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="left">
                        <span>Ajackus</span>
                    </div>
                    <div className="center">
                        <h4>Junior Developer</h4>
                        <p>At Ajackus, I've worked on multiple technology stacks like MERN, MEAN and Ionic/Cordova. I came to know about the MVP or PRD stage held in the early application development life-cycle. I've developed cross-platform hybrid apps to support all devices (Android, Desktop, iOS). One of the best projects I have worked on here is cloud-based technology (SaaS) platform that helps leasing and marketing professionals at top landlord and brokerage organizations to manage and present their property portfolio.</p>
                    </div>
                    <div className="right">
                        <span>2017 - 2019</span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="left">
                        <span>Cloudesign</span>
                    </div>
                    <div className="center">
                        <h4>Application Engineer Intern</h4>
                        <p>I did my internship at a startup called ClouDesign. In there, I got the opportunity to apply and enhance my back-end and front-end skills and also helped the organisation in tuning their several client projects to the modern UI look and feel. I amplified web applications based on eCommerce, real estate, social networking. I even build mobile responsive web apps to support all mobile/tablet devices.</p>
                    </div>
                    <div className="right">
                        <span>2016</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience;