import "./App.css";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Components/Context/cartContext";
import Checkout from "./Components/Checkout/Checkout"


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
