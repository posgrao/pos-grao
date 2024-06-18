import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";

//Import header
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}