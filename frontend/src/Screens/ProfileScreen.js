import React, { useEffect } from "react";
import {
  Paper,
  Grid,
  Avatar,
  TextField,
  Button,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { logout, imageUpload } from "../Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

const Input = styled("input")({
  display: "none",
});

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userImageUpload = useSelector((state) => state.userImageUpload);
  const { loading, error } = userImageUpload;

  useEffect(() => {
    if (!userInfo) {
      history.push("login");
    }
  }, [userInfo, history]);

  const photoHandler = async (e) => {
    dispatch(imageUpload(e));
  };

  const logoutHandler = () => {
    dispatch(logout());
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
                Profile
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src={userInfo && userInfo.image}
                sx={{ margin: 2, width: 100, height: 100 }}
              />
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={photoHandler}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>
            <TextField
              label="Name"
              type="text"
              fullWidth
              required
              margin="dense"
              value={userInfo && userInfo.name}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="dense"
              value={userInfo && userInfo.email}
              className="readOnly"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={{ marginTop: 10, height: 50 }}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileScreen;
