// import './App.css';
// import Cartstate from './Context/CartState';

// import Footer from './components/Footer';
// import FooterCard from './components/FooterCard';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import ViewCart from './components/ViewCart'

// function App() {
//   return (
//     <>
//     <Cartstate>
// <Home></Home>
// <ViewCart></ViewCart>
// </Cartstate>

//     </>
//   );
// }

// export default App;

import "./App.css";
import Cartstate from "./Context/CartState";
import Home from "./components/Home";
import ViewCart from "./components/ViewCart";
import Men from './components/MenCategory'
import Women from './components/WomenCategory'
import About from './components/About'
import Contact from './components/Contact'
import Checkout from "./components/Checkout";
import ProductPage from "./components/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegistration from "./components/LoginRegistration";

function App() {
  return (
    <>
      <Cartstate>
        {/* <Home></Home>
<ViewCart></ViewCart> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Men" element={<Men />}></Route>
            <Route path="Women" element={<Women />}></Route>
            <Route path="ViewCart" element={<ViewCart />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="Checkout" element={<Checkout />}></Route>
            <Route path="LoginRegistration" element={<LoginRegistration />}></Route>
            <Route path="ProductPage" element={<ProductPage />}/></Routes>
        </BrowserRouter>
      </Cartstate>
    </>
  );
}

export default App;
