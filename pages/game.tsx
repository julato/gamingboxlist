/*
Using arrays and rendering it as lists to incorporate map function and key prop

and the filter function can make the list more dynamic due to user accessibility
  ^^^ Have yet to integrate; search bar is there though
*/
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";

const allGames = [
  { id: 1, name: "Halo Infinite", image: "", rating: 4.5 },
  { id: 2, name: "Minecraft", image: "", rating: 4.7 },
  { id: 3, name: "Fortnite", image: "", rating: 4.2 },
  { id: 4, name: "Elden Ring", image: "", rating: 4.8 },
  { id: 5, name: "Call of Duty", image: "", rating: 4.1 },
  { id: 6, name: "Cyberpunk 2077", image: "", rating: 3.9 },
  { id: 7, name: "Assassin's Creed", image: "", rating: 4.3 },
  { id: 8, name: "God of War", image: "", rating: 4.9 },
  { id: 9, name: "The Witcher 3", image: "", rating: 4.8 },
  { id: 10, name: "Super Mario Odyssey", image: "", rating: 4.7 },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredGames = allGames.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Games</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredGames.map((game) => (
          <GameCard key={game.id} name={game.name} image={game.image} rating={game.rating} />
        ))}
      </div>

      {filteredGames.length === 0 && <p>No games found.</p>}


    </div>
  );
}
