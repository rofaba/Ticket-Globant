import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ConfirmPage from "./pages/ConfirmPage";
import NotFound from "./pages/NotFound"; // 🚀 Importamos la nueva página 404
import Header from './components/Header/Header';
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirm" element={<ConfirmPage />} />
            <Route path="*" element={<NotFound />} /> {/* 🚀 Ruta 404 */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
