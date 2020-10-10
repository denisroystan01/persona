import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Skills() {
    return (
        <div className="skills">
            <section className="inner-section">
                {[...Array(25)].map((x, i) =>
                    <div className="box-wrapper" key={i}>
                        <div className="box">
                            <span>HTML</span>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Skills;