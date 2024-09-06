import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css" 
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </Router>

  )
}

export default App;
