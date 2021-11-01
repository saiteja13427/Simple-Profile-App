import React from "react";
import { Paper, Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <Grid pt={10} container align="center" justifyContent="center">
        <Grid item xs={11} md={6}>
          <Paper elevation={10} style={{ padding: 20 }}>
            <Grid align="center" p={2}>
              <Typography variant="h4">Incribo</Typography>
            </Grid>
            <Button
              component={Link}
              to="/login"
              type="submit"
              color="primary"
              variant="contained"
              style={{ marginTop: 10, height: 50 }}
            >
              Log in
            </Button>{" "}
            <Button
              component={Link}
              to="/register"
              type="submit"
              color="primary"
              variant="outlined"
              style={{ marginTop: 10, height: 50 }}
            >
              Register
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeScreen;
