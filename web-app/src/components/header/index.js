import React from 'react';
import './index.scss';

import { NavHashLink } from 'react-router-hash-link';

// Services
// import apiService from '../../services/api';

var links = [
    {
        sectionId: 'about',
        label: 'About Me'
    },
    {
        sectionId: 'projects',
        label: 'Projects'
    },
    {
        sectionId: 'service',
        label: 'Services'
    },
    {
        sectionId: 'interests',
        label: 'Interests'
    },
    {
        sectionId: 'contact',
        label: 'Contact'
    }
]

function Header() {
    return (
        
        <div className="header">
            <section className="inner-section">
                <div className="logo">
                    <a href="javascript:void(0)"><img src="/persona/assets/logo.png" alt="logo" /></a>
                </div>
                <div className="menu">
                    <div className="inner-list">
                        <ul className="list-group">
                            {links.map((elem, i) =>
                                (
                                    <li className="item" key={i}>
                                        <NavHashLink
                                        smooth 
                                        to={elem.sectionId}
                                        elementId={elem.sectionId}
                                        activeClassName="active"
                                        >
                                            {elem.label}
                                        </NavHashLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Header;