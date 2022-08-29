// import logo from './logo.svg';
import Navbar from './parts/Navbar';
import Footer from './parts/Footer';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import ProductLanding from './pages/ProductLanding';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';

// import Navbar from './parts/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/"  element={<Homepage />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/cart"  element={<Cart />} />
          <Route path="/product/:id"  element={<ProductDetail />} />
          <Route path="/allproduct"  element={<ProductLanding />} />
          <Route path="/profile"  element={<Profile />} />
          <Route path="/checkout"  element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
