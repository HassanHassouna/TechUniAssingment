import React, {useState} from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Footer} from "./sections/Footer";
import {Shop} from "./pages/Shop";
import {ShopWithFilter} from "./pages/ShopWithFilter";
import {Detail} from "./pages/Detail";

function App() {
    const [productId, setProductId] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<div>About</div>}/>
                <Route path="/contact" element={<div>Contact</div>}/>
                <Route path="/shop" element={<Shop setProductId={setProductId}/>}/>
                <Route path="/shop/filter" element={<ShopWithFilter setProductId={setProductId}/>}/>
                <Route path="/detail/:id"
                       element={<Detail quantity={quantity} setQuantity={setQuantity} productId={productId}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
