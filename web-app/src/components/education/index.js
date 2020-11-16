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
                        <h4>MS in Data Science</h4>
                        <div>
                            <span>Currently Pursuing</span>
                        </div>
                        <p>
                            Learned python, excel, exploratory data analysis, widely used machine learning algorithms, time series analysis, and neural networks as part of academics. Also, worked on 10+ case studies and projects.
                        </p>
                    </div>
                    <div className="item">
                        <h4>Master of Computer Applications</h4>
                        <div>
                            <span>2017 - 2019</span>
                        </div>
                        <p>
                            Completed my post-graduation with an aggregate of 70%. Opened to blend of both theoretical and practical knowledge and seamlessly delve deeper into the world of computer science with the help of learning the modern programming languages, data structures, algorithms and database.
                        </p>
                    </div>
                </div>


                <div className="row">
                    <div className="item">
                        <h4>BS in Information Technology</h4>
                        <div>
                            <span>2013 - 2016</span>
                        </div>
                        <p>
                            I've been through the core basics of computers and programming languages. I've worked on my first web project developed using PHP and Javascript. I've managed to get grade 'A' in the academic term.
                        </p>
                    </div>
                    <div className="item">
                        <h4>Intermediate Level</h4>
                        <div>
                            <span>2011 - 2013</span>
                        </div>
                        <p>
                            I had taken Science as mainstream. During the academic term, I used to explore a lot and loved experimenting in lab and also gained vast knowledge in Physics and Mathematics.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education;