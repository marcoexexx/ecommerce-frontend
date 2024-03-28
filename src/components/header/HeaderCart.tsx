import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { alpha, Badge, IconButton, styled, Tooltip } from "@mui/material";
import { useRef } from "react";

const CartBadge = styled(Badge)(({ theme }) => ({
  ".MuiBadge-badge": {
    backgroundColor: `${alpha(theme.palette.error.main, 0.1)}`,
    color: `${theme.palette.error.main}`,
    minWidth: "16px",
    height: "16px",
    padding: 0,

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      boxShadow: `0 0 0 1px ${alpha(theme.palette.error.main, 0.3)}`,
      content: "''",
    },
  },
}));

export default function HeaderCart() {
  const ref = useRef(null);

  const handleOpenCart = (_evt: React.MouseEvent<HTMLButtonElement>) => {
  };

  return (
    <>
      <Tooltip arrow title="Cart">
        <IconButton color="primary" ref={ref} onClick={handleOpenCart}>
          <CartBadge
            badgeContent={0}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ShoppingCartIcon />
          </CartBadge>
        </IconButton>
      </Tooltip>
    </>
  );
}
