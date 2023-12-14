// import { Component, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/component'
import {IoLogoGithub} from 'react-icons/io'
import Footer  from './components/footer';

function App() {
  return(
    <>
    <div>
      <h1>This is my react one</h1>
      <h2>i love her</h2>
      <p>Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Impedit magnam illum ut, corporis neque  <br />
        laborum! Error natus repudiandae perspiciatis similique facere <br />
         dolore! Magnam consequatur quae obcaecati similique aut esse quidem?</p>
    
      <Component/>
    </div>
    <div>
      <h3>
        icon < IoLogoGithub/>
      </h3>
    </div>

    <div>
      <Footer/>
    </div>
    </>
  );
}
export default App
  
  
