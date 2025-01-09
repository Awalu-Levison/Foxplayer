import React from "react";
import HeroSection from "../pages/HeroSection.js";
import About from "../pages/About.js";
import "../styles/About.css"
import SearchBar from "../components/SearchBar.js";
import Trending from "../components/Trending.js";
import Recommendations2 from "../components/Recommendations2.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import MusicPlayer from "../components/MusicPlayer.js";
//import { faMusic, faPlayCircle } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div>
           <SearchBar />
            <FontAwesomeIcon />
           {/*<MusicPlayer />*/}
            <HeroSection />
            <Recommendations2 />
            <Trending />
            <About />
            {/*<Contact />*/}
        </div>
  

    );
};

export default Home;