import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Certifications() {
    return (
        <div className="certifications">
            <section className="inner-section">
                <div className="single-certificate">
                    <div className="left-section">
                        <img src="/persona/certifications/upgrad.png" />
                    </div>
                    <div className="right-section">
                        <div className="certificate-name">
                            <span>PGDDS Preparatory Course Certificate</span>
                        </div>
                        <div className="issued-by">
                            <span>upGrad</span>
                        </div>
                        <div className="other-info">
                            <span>Issued January 2020</span>
                            .
                            <span> No Expiration Date</span>
                        </div>
                        <div className="see-credential">
                            <a href="https://www.credential.net/18457136-9200-4402-838e-36821609d847" target="_blank">See Credential</a>
                        </div>
                    </div>
                </div>
                <div className="single-certificate">
                    <div className="left-section">
                        <img src="/persona/certifications/linkedin.jpg" />
                    </div>
                    <div className="right-section">
                        <div className="certificate-name">
                            <span>Python Essential Training</span>
                        </div>
                        <div className="issued-by">
                            <span>LinkedIn</span>
                        </div>
                        <div className="other-info">
                            <span>Issued November 2020</span>
                            .
                            <span> No Expiration Date</span>
                        </div>
                        <div className="see-credential">
                            <a href="javascript:void(0)" target="_blank">See Credential</a>
                        </div>
                    </div>
                </div>
                <div className="single-certificate">
                    <div className="left-section">
                        <img src="/persona/certifications/elementsofai.png" />
                    </div>
                    <div className="right-section">
                        <div className="certificate-name">
                            <span>Introduction to AI</span>
                        </div>
                        <div className="issued-by">
                            <span>Elements of AI</span>
                        </div>
                        <div className="other-info">
                            <span>Issued August 2020</span>
                            .
                            <span> No Expiration Date</span>
                        </div>
                        <div className="see-credential">
                            <a href="https://certificates.mooc.fi/validate/now5f43e5od" target="_blank">See Credential</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Certifications;