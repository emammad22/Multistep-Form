import React, { useState } from "react";
import { Box, Container, Link, Toolbar } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
  };

  return (
    <>
      <Box component="header" sx={{ background: "#eaeaea" }}>
        <Container component="div" maxWidth="lg">
          {/* That box like header-inner, it will contains only navigation menu */}
          <Box component="div" sx={{ display: "flex" }}>
            <Toolbar
              component="div"
              sx={{ display: "flex", gap: "20px", flexBasis: "50%" }}
            >
              <NavLink to="/" className={isActive ? "isActive" : "non-active"}>
                <Link sx={{ textDecoration: "none" }}>Home</Link>
              </NavLink>
              <NavLink
                to="/about"
                className={isActive ? "isActive" : "non-active"}
              >
                <Link sx={{ textDecoration: "none" }}>About Us</Link>
              </NavLink>
              <NavLink
                to="/subscription"
                className={isActive ? "isActive" : "non-active"}
              >
                <Link sx={{ textDecoration: "none" }}>Subscription</Link>
              </NavLink>
            </Toolbar>
          </Box>
        </Container>
      </Box>

      <Box component="main">
        <Container
          component="div"
          maxWidth="lg"
        >
          {/* That following box like main-inner */}
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Outlet />
          </Box>
        </Container>
      </Box>
    </>
  );
};
