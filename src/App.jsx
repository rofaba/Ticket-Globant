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
    <Header />
  );
}

export default App;
