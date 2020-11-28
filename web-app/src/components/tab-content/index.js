import React, { useEffect } from 'react';
import './index.scss';

// Services
// import apiService from '../../services/api';

function tabSwitchLogic(parentElement) {
    let tabContents = document.querySelectorAll('.' + parentElement + ' .tab-body .body-inner-section .single-tab-content');
    let tabs = document.querySelectorAll('.' + parentElement + ' .tab-header .header-inner-section .single-tab');

    let hideTabContents = (showFirst) => {
        tabContents.forEach((singleTabBody, index) => {
            !(showFirst && (index === 0)) && (singleTabBody.style.display = 'none') && (tabs[index].classList.remove('active-tab'))
        })
    };

    hideTabContents(true);    

    tabs.forEach((singleTab, index) => {
        singleTab.onclick = (e) => {
            hideTabContents();
            singleTab.classList.add('active-tab')
            tabContents[index].style.display = 'block'
        }
    })
}

function TabContent(props) {

    const ComponentOne = props.childComponent[0];
    const ComponentTwo = props.childComponent[1];

    const ComponentOneHeaderText = props.HeaderText[0];
    const ComponentTwoHeaderText = props.HeaderText[1];

    useEffect(() => {
        console.log(props)
        tabSwitchLogic(props.ClassRef);
    });

    return (        
        <div className="tab-content">
            <section className="inner-section">
                <div className="tab-header">
                    <div className="header-inner-section">
                        <div className="single-tab active-tab">
                            <div> { ComponentOneHeaderText } </div>
                        </div>
                        <div className="single-tab">
                            <div> { ComponentTwoHeaderText } </div>
                        </div>
                    </div>
                </div>
                <div className="tab-body">
                    <div className="body-inner-section">
                        <div className="single-tab-content" data-ref="ComponentOne"> 
                            <ComponentOne></ComponentOne> 
                        </div>
                        <div className="single-tab-content" data-ref="ComponentTwo">
                            <ComponentTwo></ComponentTwo>
                        </div>
                    </div>
                </div>
            </section>
        </div>        
    )
}

export default TabContent;