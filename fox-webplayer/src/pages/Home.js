import React from "react";
import HeroSection from "../pages/HeroSection.js";
import About from "../pages/About.js";
import "../styles/About.css"
import SearchBar from "../components/SearchBar.js";
import Trending from "../components/Trending.js";
import Recommendations2 from "../components/Recommendations2.js";
import MusicPlayer from "../components/MusicPlayer.js";

const Home = () => {
    return (
        <div>
            <MusicPlayer />
            <SearchBar />
            <HeroSection />
            <Recommendations2 />
            <Trending />
            <About />
            {/*<Contact />*/}
        </div>
  

    );
};

export default Home;