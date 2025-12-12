/*

interactive component for home page is user can favorite their games
*/
import { useState } from "react";
import GameCard from "../components/GameCard";

const topGames = [
  { id: 1, name: "Halo Infinite", image: "/images/halo.jpg", rating: 4.5 },
  { id: 2, name: "Minecraft", image: "/images/minecraft.jpg", rating: 4.7 },
  { id: 3, name: "Fortnite", image: "/images/fortnite.jpg", rating: 4.2 },
  { id: 4, name: "Elden Ring", image: "/images/eldenring.jpg", rating: 4.8 },
  { id: 5, name: "Call of Duty", image: "/images/cod.jpg", rating: 4.1 },
  { id: 6, name: "Cyberpunk 2077", image: "/images/cyberpunk.jpg", rating: 3.9 },
  { id: 7, name: "Assassin's Creed", image: "/images/assassinscreed.jpg", rating: 4.3 },
  { id: 8, name: "God of War", image: "/images/godofwar.jpg", rating: 4.9 },
  { id: 9, name: "The Witcher 3", image: "/images/witcher3.jpg", rating: 4.8 },
  { id: 10, name: "Super Mario Odyssey", image: "/images/mario.jpg", rating: 4.7 },
];

export default function HomePage() {
  const [playedGames, setPlayedGames] = useState<number[]>([]);

  const togglePlayed = (id: number) => {
    setPlayedGames((prev) =>
      prev.includes(id) ? prev.filter((gameId) => gameId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h1>Top 10 Games</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {topGames.map((game) => (
          <div key={game.id}>
            <GameCard name={game.name} image={game.image} rating={game.rating} />
            <button
              onClick={() => togglePlayed(game.id)}
              style={{
                marginTop: "5px",
                width: "100%",
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                background: playedGames.includes(game.id) ? "red" : "grey",
                color: playedGames.includes(game.id) ? "white" : "black",
              }}
            >

              {playedGames.includes(game.id) ? "Played!" : "Played?"}
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}
