"use client";

import getConfig from "@/libs/getConfig";
import { Box, styled } from "@mui/material";

const appLogo = getConfig("appLogo");

const MainContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "left",
  gap: 2,
  width: "100%",
  height: theme.spacing(11),
}));

export default function Logo() {
  return (
    <MainContent>
      <Box
        component="img"
        src={appLogo}
        alt="logo"
        height={theme => theme.spacing(13)}
      />
    </MainContent>
  );
}
