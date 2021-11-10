import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Netflix from "./components/Netflix";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/netflix" element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
