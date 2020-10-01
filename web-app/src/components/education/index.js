import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Education() {
    return (
        <div className="education">
            <section className="inner-section">
                <div className="row">
                    <div className="item">
                        <h4>Master in Data Science</h4>
                        <div>
                            <span>2013 - 2016</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="item">
                        <h4>Master in Data Science</h4>
                        <div>
                            <span>2013 - 2016</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>


                <div className="row">
                    <div className="item">
                        <h4>Master in Data Science</h4>
                        <div>
                            <span>2013 - 2016</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="item">
                        <h4>Master in Data Science</h4>
                        <div>
                            <span>2013 - 2016</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education;