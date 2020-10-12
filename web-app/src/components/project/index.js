import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function Project() {
    return (
        <div className="project">
            <section className="inner-section">
                <h1>Latest Projects</h1>
                <div className="grid-layout">
                    <div className="grid-item grid-item-1 span-1">item 1</div>
                    <div className="grid-item grid-item-2">item 2</div>
                    <div className="grid-item grid-item-3">item 3</div>
                    <div className="grid-item grid-item-4">item 4</div>
                    <div className="grid-item grid-item-5">item 5</div>
                    <div className="grid-item grid-item-6">item 6</div>
                    <div className="grid-item grid-item-7">item 7</div>                    
                    <div className="grid-item grid-item-11 span-2">item 8</div>
                </div>
            </section>
        </div>
    )
}

export default Project;