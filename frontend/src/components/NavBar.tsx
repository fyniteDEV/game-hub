import React from "react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import logo from "@/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box component="img" sx={{ width: 70 }} src={logo}></Box>
      <span>NavBar</span>
      <ColorModeSwitch />
    </Stack>
  );
};

export default NavBar;
