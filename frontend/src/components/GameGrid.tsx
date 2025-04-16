import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>("api/rawgio");

        console.log("res:", res.data.results);
        setGames(res.data.results);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // console.log(games);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>ERROR: {error}</p>}
      {!loading && !error && (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
          {/* {games.toString()} */}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
