import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </main>
      <footer className="mt-3">
        <div className="container mx-auto">
          <p className="text-black text-center">Shoppro &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
