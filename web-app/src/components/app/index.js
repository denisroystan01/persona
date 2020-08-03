import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

// Plugins
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

function App() {
  const getAsyncData = () => {
    axios.get('https://reqres.in/api/users?page=2')
    .then(function (response) {
      // handle success
      console.log(response);
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
          <p>Header/Menu Section</p>
        </section>
        <section className="top-section">
          <p>Banner Section</p>
        </section>
        <section className="about-section">
          <p>About Section</p>
        </section>
        <section className="skcert-section">
          <p>Skill Certificate Section</p>
        </section>
        <section className="service-section">
          <p>Service Section</p>
        </section> 
        <section className="project-section">
          <p>Project Section</p>
        </section>
        <section className="expedu-section">
          <p>Experience Education Section</p>
        </section>
        <section className="blog-section">
          <p>Blog Section</p>
        </section>
        <section className="youtube-section">
          <p>Youtube Section</p>
        </section>
        <section className="contact-section">
          <p>Contact Section</p>
        </section>
        <section className="copyright-section">
          <p>Copyright Section</p>
        </section>
      </OverlayScrollbarsComponent>     
    </div>    
  );
}

export default App;
