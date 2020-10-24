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
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQFmHphbCid3mA/company-logo_100_100/0?e=1609372800&v=beta&t=3lek_jEmT9br34Vx5bjYIQdwXSy9nkcmJGQgiayiMFs" />
                    </div>
                    <div className="right-section">
                        <div className="certificate-name">
                            <span>PGDDS Preparatory Course Certificate</span>
                        </div>
                        <div className="issued-by">
                            <span>LinkedIn</span>
                        </div>
                        <div className="other-info">
                            <span>Issued May 2020</span>
                            .
                            <span> No Expiration Date</span>
                        </div>
                        <div className="see-credential">
                            <a href="">See Credential</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Certifications;