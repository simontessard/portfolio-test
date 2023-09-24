import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Carousel from './components/Carousel/Carousel';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Skills />
    <Contact/>
    <Carousel/>
    <Footer />
  </React.StrictMode>
);
