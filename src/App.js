import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Projects';
import Conatct from './components/Contact/Contact';
import MyCourses from './components/MyCourses/MyCourses';
import MyResume from './components/MyResume/MyResume';
import PhoneNumbers from './components/PhoneNumber/PhoneNumber';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import SnowEffect from './components/SnowEffect/SnowEffect';

function App() {
  return (
    <>
      <BrowserRouter>
        <SnowEffect />
        <Header />
        <BackgroundMusic />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Conatct />} />
          <Route path="/my_cources" element={<MyCourses />} />
          <Route path="/my_resume" element={<MyResume />} />
          <Route path="/phone" element={<PhoneNumbers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
