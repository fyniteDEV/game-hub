import { FormControlLabel, Switch, useMediaQuery } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const ColorModeSwitch = () => {
  const { mode, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const isDark = mode === "dark" || (mode === "system" && prefersDarkMode);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDark}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#90ee90", // thumb color when checked
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#90ee90", // track color when checked
            },
          }}
        />
      }
      label=""
      onChange={() => {
        setMode(isDark ? "light" : "dark");
        console.log(mode);
      }}
    />
  );
};

export default ColorModeSwitch;
