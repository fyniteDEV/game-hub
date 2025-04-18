import { Game } from "@/hooks/useGames";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia
        image={getCroppedImageUrl(game.background_image)}
        sx={{ height: 200, contain: "content" }}
        title={`Cover of '${game.name}'`}
      />
      <CardContent>
        -
        <Typography variant="h5" gutterBottom>
          {game.name}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GameCard;
