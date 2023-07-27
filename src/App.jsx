import React from "react";
import "./App.css";
import Quote from "./Componments/Quote/Quote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Twitter from "./pages/Twitter/Twitter";
import Whatapp from "./pages/Whatapp/Whatapp";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quote></Quote>}></Route>
          <Route path="/twitter" element={<Twitter />}></Route>
          <Route path="/whatapp" element={<Whatapp />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
