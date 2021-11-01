import React from "react";
import { Paper, Grid, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { register } from "../Actions/userActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/profile");
    }
  }, [userInfo, history]);

  const submitHandler = () => {
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <Grid pt={3} container align="center" justifyContent="center">
        {error && <Message severity="error">{error}</Message>}{" "}
        {message && <Message severity="error">{message}</Message>}
        {loading && <Loader />}
      </Grid>
      <Grid pt={5} container align="center" justifyContent="center">
        <Grid item xs={11} md={6}>
          <Paper elevation={10} style={{ padding: 20 }}>
            <Grid align="center" p={2}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Register
              </Typography>
            </Grid>
            <TextField
              label="Name"
              placeholder="Enter Name"
              type="text"
              fullWidth
              required
              margin="dense"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="Enter Email"
              type="email"
              fullWidth
              required
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              placeholder="Enter Password"
              type="password"
              fullWidth
              required
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              label="Confirm Password"
              placeholder="Confirm password"
              type="password"
              fullWidth
              required
              margin="dense"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={{ marginTop: 10, height: 50 }}
              onClick={submitHandler}
            >
              Register
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterScreen;
