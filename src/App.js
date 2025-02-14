// app.js
import "tailwindcss/tailwind.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/categories/:idc" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
