import React from "react";
import "./Footer.css";
import youtube_icon from "../../Assets/youtube_icon.png";
import twitter_icon from "../../Assets/twitter_icon.png";
import instagram_icon from "../../Assets/instagram_icon.png";
import facebook_icon from "../../Assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
