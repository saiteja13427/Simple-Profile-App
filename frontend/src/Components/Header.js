import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material/";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Incribo
            </Typography>
            <Button component={Link} to="/" color="inherit" type="submit">
              Home
            </Button>
            <Button component={Link} to="/login" color="inherit" type="submit">
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
