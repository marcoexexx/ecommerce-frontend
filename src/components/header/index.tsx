"use client";

import { Box, Container, styled } from "@mui/material";
import { MuiTypography } from "../ui";
import HeaderButtons from "./HeaderButtons";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";

const MainContent = styled(Box)(({}) => ({
  flex: 1,
}));

const SecoundaryContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  height: 40,
  background: theme.palette.secondary.main,
  color: theme.colors.alpha.trueWhite[70],
}));

export default function Header() {
  return (
    <MainContent>
      <SecoundaryContent>
        <Container maxWidth="lg">
          <Box
            height="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <MuiTypography
              component="a"
              sx={{ cursor: "pointer" }}
              text="The #1 Online Tech Retailer in Myanmar » Reviews"
            />
            <MuiTypography
              component="a"
              sx={{ cursor: "pointer" }}
              text="Like us on Facebook"
            />
            <MuiTypography
              component="a"
              sx={{ cursor: "pointer" }}
              text="🎉 March Payday Sale"
            />
          </Box>
        </Container>
      </SecoundaryContent>

      <Container maxWidth="lg">
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={10}
        >
          <Box>
            <Logo />
          </Box>
          <HeaderSearch />
          <HeaderButtons />
        </Box>
      </Container>

      <SecoundaryContent>
        <Container maxWidth="lg">
          <Box
            height="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <HeaderNavigation />
            09 123 123 123
          </Box>
        </Container>
      </SecoundaryContent>
    </MainContent>
  );
}
