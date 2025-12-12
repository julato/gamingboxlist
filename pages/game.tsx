/*
PHASE 1
Using arrays and rendering it as lists to incorporate map function and key prop

and the filter function can make the list more dynamic due to user accessibility
  ^^^ Have yet to integrate; search bar is there though

PHASE 2
import GameCard and sub components
removed array of games and instead apply API https://rawg.io/apidocs
api key b5627deffe7643e096f0ee5ef2c20b3c
*/


import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import GameCard, {
  GameCardImage,
  GameCardInfo,
  GameCardPlayedButton,
} from "../components/GameCard";

const API_KEY = "b5627deffe7643e096f0ee5ef2c20b3c";

type Game = {
  id: number;
  name: string;
  image: string;
  rating: number;
};

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  // Phase 2 state: track played games
  const [playedGames, setPlayedGames] = useState<number[]>([]);

  // Function to toggle played state
  const togglePlayed = (id: number) => {
    setPlayedGames((prev) =>
      prev.includes(id) ? prev.filter((gameId) => gameId !== id) : [...prev, id]
    );
  };

  // Fetch games from RAWG API
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setGames([]);
      return;
    }

    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`
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

    fetchGames();
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Games</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {loading && <p>Loading games...</p>}

      {!loading && (
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
              <GameCardImage image={game.image} name={game.name}/>
              <GameCardInfo name={game.name} rating={game.rating} />
              <GameCardPlayedButton
                id={game.id}
                playedGames={playedGames}
                togglePlayed={togglePlayed}
              />
            </GameCard>
          ))}
        </div>
      )}

      {!loading && games.length === 0 && searchTerm !== "" && (
        <p>No games found.</p>
      )}
    </div>
  );
}

