import React from "react";
import { Box, Stack } from "@mui/material";
import logo from "@/assets/logo.webp";

const NavBar = () => {
  return (
    <Stack spacing={2} direction={"row"} alignItems={"center"}>
      <Box component="img" sx={{ width: 70 }} src={logo}></Box>
      <span>NavBar</span>
    </Stack>
  );
};

export default NavBar;
