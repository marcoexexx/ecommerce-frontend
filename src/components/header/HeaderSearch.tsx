import {
  Avatar,
  Box,
  Divider,
  Hidden,
  InputAdornment,
  lighten,
  Link,
  List,
  ListItemAvatar,
  ListItemButton,
  Paper,
  styled,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";

import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import FindInPageTwoToneIcon from "@mui/icons-material/FindInPageTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { MuiButton } from "../ui";

const SearchInputWrapper = styled(TextField)(({ theme }) => ({
  background: theme.colors.alpha.white[100],

  ".MuiInputBase-input": {
    fontSize: theme.typography.pxToRem(17),
  },
}));

const SearchResult = styled(Paper)(({}) => ({
  position: "absolute",
}));

export default function HeaderSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [openSearchResult, setOpenSearchResult] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleOnCloseSearchResult = () => {
    setTimeout(() => {
      setOpenSearchResult(false);
    }, 500);
  };

  const handleChangeSearch = (
    evt: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = evt.target;
    setSearchValue(value);
  };

  return (
    <Box width="100%">
      <SearchInputWrapper
        ref={ref}
        value={searchValue}
        onChange={handleChangeSearch}
        onFocus={() => setOpenSearchResult(true)}
        onBlur={handleOnCloseSearchResult}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        placeholder="Search terms here..."
        label="Search"
      />

      {openSearchResult && searchValue
        ? (
          <SearchResult>
            <Box
              sx={{ p: 2 }}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="body2" component="span">
                Search results for{" "}
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  component="span"
                >
                  {searchValue}
                </Typography>
              </Typography>

              <Link href="#" variant="body2" underline="hover">
                Advanced search
              </Link>
            </Box>

            <Divider />

            <List disablePadding>
              <ListItemButton>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: (theme: Theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      <FindInPageTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                </Hidden>
                <Box flex="1">
                  <Box display="flex" justifyContent="space-between">
                    <Link
                      href="#"
                      underline="hover"
                      sx={{ fontWeight: "bold" }}
                      variant="body2"
                    >
                      Dashboard for Healthcare Platform
                    </Link>
                  </Box>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: (theme: Theme) =>
                        lighten(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    This page contains all the necessary information for
                    managing all hospital staff.
                  </Typography>
                </Box>
                <ChevronRightTwoToneIcon />
              </ListItemButton>
              <Divider sx={{ my: 1 }} component="li" />
              <ListItemButton>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: (theme: Theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      <FindInPageTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                </Hidden>
                <Box flex="1">
                  <Box display="flex" justifyContent="space-between">
                    <Link
                      href="#"
                      underline="hover"
                      sx={{ fontWeight: "bold" }}
                      variant="body2"
                    >
                      Example Projects Application
                    </Link>
                  </Box>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: (theme: Theme) =>
                        lighten(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    This is yet another search result pointing to a app
                    page.
                  </Typography>
                </Box>
                <ChevronRightTwoToneIcon />
              </ListItemButton>
              <Divider sx={{ my: 1 }} component="li" />
              <ListItemButton>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: (theme: Theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      <FindInPageTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                </Hidden>
                <Box flex="1">
                  <Box display="flex" justifyContent="space-between">
                    <Link
                      href="#"
                      underline="hover"
                      sx={{ fontWeight: "bold" }}
                      variant="body2"
                    >
                      Search Results Page
                    </Link>
                  </Box>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: (theme: Theme) =>
                        lighten(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    Choose if you would like to show or not this typography
                    section here...
                  </Typography>
                </Box>
                <ChevronRightTwoToneIcon />
              </ListItemButton>
            </List>

            <Divider sx={{ mt: 1, mb: 2 }} />

            <Box sx={{ textAlign: "center" }}>
              <MuiButton color="primary">
                View all search results
              </MuiButton>
            </Box>
          </SearchResult>
        )
        : null}
    </Box>
  );
}
