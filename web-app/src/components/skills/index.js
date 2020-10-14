import React, { useState, useEffect } from 'react';
import './index.scss';

// Services
import apiService from '../../services/api';

var SkillArray = [
    {
        name: 'Angular',
        textColor: '',
        lightColor: '#DD1B16',
        darkColor: '#A51410'
    },
    {
        name: 'Vue.js',
        textColor: '',
        lightColor: '#3FB27F',
        darkColor: '#35475C'
    },
    {
        name: 'React',
        textColor: '',
        lightColor: '#61DBFB',
        darkColor: '#48A4BC'
    },
    {
        name: 'HTML5',
        textColor: '',
        lightColor: '#E44D26',
        darkColor: '#AB391C'
    },
    {
        name: 'CSS3',
        textColor: '',
        lightColor: '#379AD6',
        darkColor: '#2973A0'
    },
    {
        name: 'JavaScript',
        textColor: '',
        lightColor: '#F0DB4F',
        darkColor: '#B4A43B'
    },
    {
        name: 'TypeScript',
        textColor: '',
        lightColor: '#007ACD',
        darkColor: '#005B99'
    },
    {
        name: 'Python',
        textColor: '',
        lightColor: '#316B9A',
        darkColor: '#FFE873'
    },
    {
        name: 'Node.js',
        textColor: '',
        lightColor: '#75B957',
        darkColor: '#3C873A'
    },
    {
        name: 'Java',
        textColor: '',
        lightColor: '#F0931C',
        darkColor: '#517F9D'
    },
    {
        name: 'MongoDB',
        textColor: '',
        lightColor: '#6BB157',
        darkColor: '#3F2B19'
    },
    {
        name: 'SQLite',
        textColor: '',
        lightColor: '#63B2E0',
        darkColor: '#013B59'
    },
    {
        name: 'Rest API',
        textColor: '',
        lightColor: '#78909C',
        darkColor: '#455A64'
    },
    {
        name: 'GraphQL',
        textColor: '',
        lightColor: '#E535AB',
        darkColor: '#AB2780'
    },
    {
        name: 'Git',
        textColor: '',
        lightColor: '#F05033',
        darkColor: '#B43C26'
    },
    {
        name: 'WordPress',
        textColor: '',
        lightColor: '#146D94',
        darkColor: '#0F516F'
    },
    {
        name: 'Jira',
        textColor: '',
        lightColor: '#0052CC',
        darkColor: '#003D99'
    },
    {
        name: 'Ionic',
        textColor: '',
        lightColor: '#458BFF',
        darkColor: '#3368BF'
    },
    {
        name: 'React Native',
        textColor: '',
        lightColor: '#37D9FE',
        darkColor: '#29A2BE'
    },
    {
        name: 'Apache Cordova',
        textColor: '',
        lightColor: '#DADADA',
        darkColor: '#818891'
    },
    {
        name: 'Sass',
        textColor: '',
        lightColor: '#C85692',
        darkColor: '#96406D'
    },
]

function Skills() {
    return (
        <div className="skills">
            <section className="inner-section">
                {SkillArray.map((obj, i) => {
                        let style = {
                            color: obj.textColor || '#FFFFFF',
                            'background-image': 'linear-gradient(19deg, ' + obj.lightColor + ' 0%, ' + obj.darkColor + ' 100%)'
                        }
                        return (<div className="box-wrapper" key={i}>
                            <div className="box" style={style}>
                                <span> { obj.name } </span>
                            </div>
                        </div>)
                    }
                )}
            </section>
        </div>
    )
}

export default Skills;