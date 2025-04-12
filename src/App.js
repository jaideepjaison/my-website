import logo from './test.jpg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Project from './Component/Project/Project';
import Conatct from './Component/Contact/Contact';
import My_cources from './Component/My-Cources/my_cource';
import MyResume from './Component/My-Resume/my-resume';
import PhoneNumbers from './Component/PhoneNumber/PhoneNumber';
function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/projects' element={<Project/>} />
      <Route path='/contact' element={<Conatct/>} />
      <Route path='/my_cources' element={<My_cources/>} />
      <Route path='/my_resume' element={<MyResume/>} />
      <Route path='/phoneNumber' element={<PhoneNumbers/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
   </>
        
     
  );
}


export default App;
