import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src="/hero_banner.jpg" alt="hero" className="banner-img" />
        <div className="hero-caption">
          <img src="/hero_title.png" alt="title" className="caption-img" />
          <p>
            As her curiosity grows, Livia decides to investigate, only to
            uncover that the shadows conceal dark secrets about the house’s
            previous occupants.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src="/play_icon.png" alt="play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src="/info_icon.png" alt="info" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
