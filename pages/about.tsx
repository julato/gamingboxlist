/*
interactive component for about page is user can click button to expand info

PHASE 3
alter about page 
*/
import { useState } from "react";

export default function AboutPage() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <h1>About</h1>
      <p>This project is heavily inspired by the Professor’s in-class demo and the website “letterboxd.” 
          The sole purpose of this project is to be a video game hub for gamers to visit to search for games with vital information 
          (release date, rating, game summary), see recommendations via filtering, log video games to a wishlist or to their favorites, 
          and to add a rating for personal or online critiquing. 
          The experience I want to create is a website/ application that gamers can access to search and log video games, similar to letterdbox.</p>

      <h3
        onClick={() => setShowInfo(!showInfo)}
        style={{ cursor: "pointer", color: "blue" }}
      >
        {showInfo ? "Hide more info" : "Click to see API used"}
      </h3>

      {showInfo && (
        <p>
          There are two types of companies: hoarders and givers. RAWG is the largest video game database and game discovery service. 
          And we are gladly sharing our 500,000+ games, search, and machine learning recommendations with the world. 
          Learn what the RAWG games database API can do and build something cool with it!
          https://rawg.io/apidocs/

        </p>

      )}
    </div>
  );
}
