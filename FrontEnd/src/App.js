import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import axios from 'axios'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>          
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
