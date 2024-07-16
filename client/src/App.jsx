import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";

//Import header
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";
import PremiumBanner from "./components/PremiumBanner";
import PrivateRoute from "./components/PrivateRoute";


export default function App() {
  return (
    <BrowserRouter>
    <PremiumBanner />
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/projects" element={<Projects />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}