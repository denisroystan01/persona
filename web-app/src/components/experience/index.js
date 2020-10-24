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
                        <span>Google Inc</span>
                    </div>
                    <div className="center">
                        <h4>Front-End Developer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="right">
                        <span>2010 - Present</span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="left">
                        <span>Google Inc</span>
                    </div>
                    <div className="center">
                        <h4>Front-End Developer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="right">
                        <span>2010 - Present</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience;