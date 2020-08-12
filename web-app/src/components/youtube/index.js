import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Youtube() {
    return (
        <div className="youtube">
            <section className="inner-section">
                <p>I'm available for freelance projects, remote work or just for discussion. Have any project in mind?</p>
                <button>Contact Me</button>
            </section>
        </div>
    )
}

export default Youtube;