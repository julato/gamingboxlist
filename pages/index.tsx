/*
PHASE 1
interactive component for home page is user can favorite their games

PHASE 2
remove array and add API
*/
import { useState, useEffect } from "react";
import GameCard, { GameCardImage, GameCardInfo, GameCardPlayedButton } from "../components/GameCard";

const API_KEY = "b5627deffe7643e096f0ee5ef2c20b3c";

type Game = {
  id: number;
  name: string;
  image: string;
  rating: number;
};

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([]);

  const [playedGames, setPlayedGames] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const togglePlayed = (id: number) => {
    setPlayedGames((prev) =>
      prev.includes(id) ? prev.filter((gameId) => gameId !== id) : [...prev, id]
    );
  };

  //taken from game.tsx                     DO NOT FORGET TO REMOVE searchTerm
  useEffect(() => {

      const fetchTopGames = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10&ordering=-rating`  
          );
          const data = await response.json();
  
          const formatted: Game[] = data.results.map((g: any) => ({
            id: g.id,
            name: g.name,
            image: g.background_image,
            rating: g.rating,
          }));
  
          setGames(formatted);
        } catch (error) {
          console.error("API error:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTopGames();
    }, []);


  return (
    <div>
      <h1>Top 10 Games</h1>
      {loading && <p>Loading games...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {games.map((game) => (
          <GameCard key={game.id}>
            <GameCardImage image={game.image} name={game.name} />
            <GameCardInfo name={game.name} rating={game.rating} />
            <GameCardPlayedButton
              id={game.id}
              playedGames={playedGames}
              togglePlayed={togglePlayed}
            />
          </GameCard>
        ))}
      </div>
    </div>
  );
}
