import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Skills() {
    return (
        <div className="skills">
            <section className="inner-section">
                <div className="skill-item">
                    <div class="set-size charts-container">
                        <div class="pie-wrapper progress-70">
                            <span class="label">HTML</span>
                            <div class="pie">
                                <div class="left-side half-circle"></div>
                                <div class="right-side half-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;