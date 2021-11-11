import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Stream from "./components/Stream";
import Series from "./components/Series";
import Movies from "./components/Movies";

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
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        <Routes>
          <Route path="/stream" element={<Stream />} />
        </Routes>
        <Routes>
          <Route
            path="/series"
            element={
              <Series
                url={`https://api.themoviedb.org/3/discover/tv?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&with_networks=213`}
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
