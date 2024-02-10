import "./App.css";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
