import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Profession() {
    return (
        <div className="profession">
            
            <section className="inner-section">
                <section className="inner-section-left">
                    <div>
                        <h1>I do much more than just <br />work</h1>
                        <p>
                            Slow Progress Is Better Than No Progress, this is what I follow. I always try to enjoy life at its fullest, when I’m not on the job, I love gaming, listening music, working my way through a more experimental and creative approach to cooking and indulging my love for binge-watching on Netflix.
                        </p>
                    </div>                    
                </section>
                <section className="inner-section-right">
                    <div className="first-section">
                        <div className="interest passion-one">
                            <img src="./persona/assets/interests/blog.svg" alt="interest"/>
                            <span>Blog</span>
                        </div>
                        <div className="interest passion-two">
                            <img src="./persona/assets/interests/youtube.svg" alt="interest"/>
                            <span>Youtube</span>
                        </div>
                    </div>
                    <div className="second-section">
                        <div className="interest passion-three">
                            <img src="./persona/assets/interests/freelance.svg" alt="interest"/>
                            <span>Freelance</span>
                        </div>
                        <div className="interest passion-four">
                            <img src="./persona/assets/interests/gaming.svg" alt="interest"/>
                            <span>Gaming</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Profession;