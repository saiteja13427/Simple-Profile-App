import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_IMGUPL_REQUEST,
  USER_IMGUPL_FAIL,
  USER_IMGUPL_SUCCESS,
} from "../Constants/userConstants";
import axios from "axios";

const instance = axios.create();

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await instance.post(
      "api/users/login",
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      //Checking for error.response and error.response.data.message to check the errors coming from backen
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/",
      { name, email, password },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      //Checking for error.response and error.response.data.message to check the errors coming from backen
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = (name, email, password) => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const imageUpload = (e) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_IMGUPL_REQUEST });

    const imgFile = e.target.files[0];
    let formData = new FormData();
    formData.append("image", imgFile);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/users/profile", formData, config);
    data.token = getState().userLogin.userInfo.token;
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: USER_IMGUPL_SUCCESS });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_IMGUPL_FAIL,
      //Checking for error.response and error.response.data.message to check the errors coming from backen
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
