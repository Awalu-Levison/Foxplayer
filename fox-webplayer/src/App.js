import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NowPlaying from "./components/NowPlaying";
import "./index.css";

/* Importing the navigation menu */
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
import Account from "./pages/Account";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="library" element={<Library />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </main>
        <NowPlaying />
      </div>
    </Router>
    </>
  );
}

export default App;