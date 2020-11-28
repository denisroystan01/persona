import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Contact() {
    return (
        
        <div className="contact">
            <section className="inner-section">
                <h1>Say Hola</h1>
                <p> 
                    <span> I'd love to meet over a beer or a cup of coffee. I'm available for freelance projects, remote work or just for discussion. Have any project in mind? </span>
                </p>
                <a href="https://denisroystan.typeform.com/to/qpiUmoH8" target="_blank"><button>Buzz Me</button></a>
            </section>
        </div>
        
    )
}

export default Contact;