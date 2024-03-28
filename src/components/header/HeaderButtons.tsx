import { Box } from "@mui/material";

import HeaderCart from "./HeaderCart";
import HeaderFavorites from "./HeaderFavorites";
import HeaderSearch from "./HeaderSearch";
import HeaderTranslations from "./HeaderTranslations";

export default function HeaderButtons() {
  return (
    <Box display="flex" flexDirection="row" gap={1}>
      <HeaderCart />
      <HeaderFavorites />
      <HeaderTranslations />
    </Box>
  );
}
