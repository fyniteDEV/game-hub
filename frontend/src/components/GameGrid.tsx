import useGames from "@/hooks/useGames";
import { Grid } from "@mui/material";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>ERROR: {error}</p>}
      {!error && (
        <Grid container spacing={2}>
          {games.map((game) => (
            <Grid size={{ xl: 2.4, md: 4, sm: 6, xs: 12 }} padding={2}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default GameGrid;
