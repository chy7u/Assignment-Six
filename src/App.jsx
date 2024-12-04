import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import GenreView from "./views/GenreView";
import LoginView from "./views/LoginView";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView/>}/>
        <Route path="genre/:id" element={<GenreView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App