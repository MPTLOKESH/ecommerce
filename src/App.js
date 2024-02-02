import "./App.css";

import Welcome from "./components/welcome/Welcome";
import SignIn from "./components/signin/SignIn";
import Home from "./components/Home/Home";
import Ordered from "./components/Ordered/ordered";

import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen w-screen relative">
        <Router>
          <Routes>
          
            <Route index element={<SignIn />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/:id/cart" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/ordered" element={<Ordered />} />
            <Route path="/ordered" element={<Ordered />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
