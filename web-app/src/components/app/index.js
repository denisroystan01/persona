import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

// Components
import Header from '../header/index';
import Banner from '../banner/index';
import Contact from '../contact/index';
import Profession from '../profession/index';
import About from '../about/index';
import Service from '../service/index';
import Project from '../project/index';
import TabContent from '../tab-content/index';
import Certifications from '../certifications/index';
import Skills from '../skills/index';
import Education from '../education/index';
import Experience from '../experience/index';

// Services
import apiService from '../../services/api';

// Plugins
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

function App() {
  const getAsyncData = () => {
    axios.get('https://reqres.in/api/users?page=2')
    .then(function (response) {
      // handle success
      console.log(response);
      // apiService.post().then(function (por) {console.log(por)})
      setIsLoading(false);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("Api Call Finished")
    });
  }

  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getAsyncData();
    }, 2000);    
  }, []);

  return (    
    <div className="app">
      <OverlayScrollbarsComponent className="app-scrollbar">
        {/* <header className="app-header">
          <p>
            Welcome Abroad!
            One Page Personal Portfolio
          </p>
          {isLoading ? (
            <p>Loading Remote Data ...</p>
          ) : (
            <p> Loaded Remote Data </p>
          )}
        </header> */}
        <section className="header-section">
          <Header></Header>
        </section>
        <section className="top-section">
          <Banner></Banner>
        </section>
        <section className="about-section" id="about">
          <About></About>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
            <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
          </svg>
        </section>
        <section className="skcert-section" id="skills">
          <TabContent childComponent={[Skills, Certifications]} HeaderText={['Skills', 'Certifications']} ClassRef={'skcert-section'}></TabContent>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
            <circle fill="white" cx="0" cy="100" r="100" />
            <circle fill="white" cx="200" cy="100" r="100" />
          </svg>
        </section>
        <section className="project-section" id="projects">
          <Project></Project>
          <div class="custom-shape-divider-bottom-1602356617">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
          </div>
        </section>
        <section className="service-section" id="service">
          <Service></Service>
          <div class="custom-shape-divider-bottom-1602356006">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
            </svg>
          </div>
        </section> 
        <section className="expedu-section" id="experience">
          <TabContent childComponent={[Experience, Education]} HeaderText={['Experience', 'Education']} ClassRef={'expedu-section'}></TabContent>
        </section> 
        <section className="divider-5">
          <div className="custom-shape-divider-top-1602341870">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
            </svg>
          </div>
        </section>  
        <section className="profession-section" id="interests">
          <Profession></Profession>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-outer-section">
            <Contact></Contact>
          </div>
        </section>
        <section className="copyright-section">
          <footer className="page-footer"> <small>&copy; Copyright {new Date().getFullYear()}, Denis Roystan. All rights reserved.</small> </footer> 
        </section>
      </OverlayScrollbarsComponent>     
    </div>    
  );
}

export default App;
