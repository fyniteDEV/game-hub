import { Box, PaletteColor, Typography, useTheme } from "@mui/material";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const theme = useTheme();

  let paletteColor;
  if (score > 75) {
    paletteColor = theme.palette.success;
  } else if (score > 60) {
    paletteColor = theme.palette.warning;
  } else {
    paletteColor = theme.palette.error;
  }

  const bgcolor =
    theme.palette.mode === "light" ? paletteColor.light : paletteColor.dark;

  return (
    <Box sx={{ px: 1.4, py: 0.3, borderRadius: "5px", bgcolor: bgcolor }}>
      <Typography variant="button" color={paletteColor.contrastText}>
        {score}
      </Typography>
    </Box>
  );
};

export default CriticScore;
