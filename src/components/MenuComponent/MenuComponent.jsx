"use client";

import { Button, Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { links } from "../Links/Links";
import { MenuOutlined } from "@mui/icons-material";

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOnClose = () => {
    setAnchorEl(null);
  };
  const onClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        id="menu-btn"
        color="inherit"
        onClick={onClickHandler}
        aria-controls={open ? "menu-mobile" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ display: { md: "none" } }}
      >
        <MenuOutlined />
      </Button>
      <Menu
        id="menu-mobile"
        open={open}
        anchorEl={anchorEl}
        onClose={handleOnClose}
        MenuListProps={{
          "aria-labelledby": "menu-btn",
        }}
      >
        {links.map((link) => (
          <MenuItem key={link.title}>
            <Link variant="body1" underline="none" href={link.path}>
              {link.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuComponent;
