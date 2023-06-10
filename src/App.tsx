import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<div>About</div>}/>
                <Route path="/contact" element={<div>Contact</div>}/>
            </Routes>
        </div>
    );
}

export default App;
