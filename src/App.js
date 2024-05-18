import logo from './test.jpg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Project from './Component/Project/Project';
import Conatct from './Component/Contact/Contact';
function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/projects",
  //     element:<Project/>
  //   }
  // ])
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  // ]);
  
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/projects' element={<Project/>} />
      <Route path='/contact' element={<Conatct/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
   </>
        
     
  );
}


export default App;
