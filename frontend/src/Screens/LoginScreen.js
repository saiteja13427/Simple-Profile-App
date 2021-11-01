import React, { useState, useEffect } from "react";
import { Paper, Grid, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Actions/userActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/profile");
    }
  }, [userLogin, history, userInfo]);

  const submitHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <>
      <Grid pt={3} container align="center" justifyContent="center">
        {error && <Message severity="error">{error}</Message>}{" "}
        {loading && <Loader />}
      </Grid>

      <Grid pt={10} container align="center" justifyContent="center">
        <Grid item xs={11} md={6}>
          <Paper elevation={10} style={{ padding: 20 }}>
            <Grid align="center" p={2}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Login
              </Typography>
            </Grid>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter Eamil"
              fullWidth
              required
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={submitHandler}
              style={{ marginTop: 10, height: 50 }}
            >
              Sign in
            </Button>
            <Button
              component={Link}
              to="/register"
              color="primary"
              variant="outlined"
              fullWidth
              style={{ marginTop: 10, height: 50 }}
            >
              Don't Have an Account? Register
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginScreen;
