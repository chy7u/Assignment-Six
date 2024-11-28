import { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Featured from "./components/Feature";
import './App.css';

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default App;
