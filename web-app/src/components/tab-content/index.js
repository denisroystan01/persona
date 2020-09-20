import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

function tabSwitchLogic() {
    let tabContents = document.querySelectorAll('.tab-body .body-inner-section .single-tab-content');
    let tabs = document.querySelectorAll('.tab-header .header-inner-section .single-tab');

    let hideTabContents = (showFirst) => {
        tabContents.forEach((singleTabBody, index) => {
            !(showFirst && (index === 0)) && (singleTabBody.style.display = 'none')
        })
    };

    hideTabContents(true);    

    tabs.forEach((singleTab, index) => {
        singleTab.onclick = (e) => {
            hideTabContents();
            tabContents[index].style.display = 'block'
        }
    })
}

function TabContent() {

    useEffect(() => {
        tabSwitchLogic();
    }, []);

    return (        
        <div className="tab-content">
            <section className="inner-section">
                <div className="tab-header">
                    <div className="header-inner-section">
                        <div className="single-tab">
                            <div> Skills </div>
                        </div>
                        <div className="single-tab">
                            <div> Certificates </div>
                        </div>
                    </div>
                </div>
                <div className="tab-body">
                    <div className="body-inner-section">
                        <div className="single-tab-content" data-ref="skills">Skills</div>
                        <div className="single-tab-content" data-ref="certificates">Certificate</div>
                    </div>
                </div>
            </section>
        </div>        
    )
}

export default TabContent;