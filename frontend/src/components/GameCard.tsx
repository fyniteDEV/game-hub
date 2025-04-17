import { Game } from "@/hooks/useGames";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia
        image={game.background_image}
        sx={{ height: 200, contain: "content" }}
        title={`Cover of '${game.name}'`}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {game.name}
        </Typography>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardContent>
    </Card>
  );
};

export default GameCard;
