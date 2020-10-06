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
        <section className="about-section">
          <About></About>
        </section>
        <section className="profession-section">
          <Profession></Profession>
        </section>
        <section className="skcert-section">
          <TabContent childComponent={[Skills, Certifications]} HeaderText={['Skills', 'Certifications']} ClassRef={'skcert-section'}></TabContent>
        </section>
        <section className="service-section">
          <Service></Service>
        </section> 
        <section className="project-section">
          <Project></Project>
        </section>
        <section className="expedu-section">
          <TabContent childComponent={[Experience, Education]} HeaderText={['Experience', 'Education']} ClassRef={'expedu-section'}></TabContent>
        </section>        
        <section className="contact-section">
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
