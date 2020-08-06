import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Contact() {
    return (
        <div className="contact">
            <section className="inner-section">
                <h1>Say Hola</h1>
                <p>I'm available for freelance projects, remote work or just for discussion. Have any project in mind?</p>
                <button>Contact Me</button>
            </section>
        </div>
    )
}

export default Contact;