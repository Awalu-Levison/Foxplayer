import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
//import NowPlaying from "./components/NowPlaying";


/* Importing the navigation menu */
import Home from "../pages/Home.js";
import Explore from "../pages/Explore.js";
import Account from "../pages/Account.js";


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </main>
      {/*<Contact />*/}
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;