import { Box, List, ListItem, ListItemText, styled } from "@mui/material";

const ListWrapper = styled(Box)(({}) => ({}));

export default function HeaderNavigation() {
  return (
    <>
      <ListWrapper sx={{ display: { xs: "none", md: "block" } }}>
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{
              root: "MuiListItem-indicators",
            }}
            onClick={() => null}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Products"
            />
          </ListItem>

          <ListItem
            classes={{
              root: "MuiListItem-indicators",
            }}
            onClick={() => null}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Categories"
            />
          </ListItem>
        </List>
      </ListWrapper>
    </>
  );
}
