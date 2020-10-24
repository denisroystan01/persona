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
                    <h1>SPECILIZING IN</h1>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill">
                                <img src="https://www.pikpng.com/pngl/m/572-5723259_icon-icons-cartoons-cartoon-cartoonizer-aesthetic-transparent-tumblr.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>UI/UX</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill">
                                <img src="https://www.pikpng.com/pngl/m/572-5723259_icon-icons-cartoons-cartoon-cartoonizer-aesthetic-transparent-tumblr.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill">
                                <img src="https://www.pikpng.com/pngl/m/572-5723259_icon-icons-cartoons-cartoon-cartoonizer-aesthetic-transparent-tumblr.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>UI/UX</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left-section">
                            <div className="image-fill">
                                <img src="https://www.pikpng.com/pngl/m/572-5723259_icon-icons-cartoons-cartoon-cartoonizer-aesthetic-transparent-tumblr.png" />
                            </div>
                        </div>
                        <div className="right-section">
                            <h4>Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service;