import {
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_LOADING,
} from "./actionTypes";
import axios from "../../shared/eaxios";

export const loading = () => {
  return {
    type: ADD_USER_LOADING,
    loading: true,
  };
};

export const addUserSuccess = (userData) => {
  console.log("userData ###", userData);
  return {
    type: ADD_USER_SUCCESS,
    userData,
  };
};

export const addUserFail = (errorMessage) => {
  return {
    type: ADD_USER_FAIL,
    errorMessage,
  };
};

export const addUser = (userData) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .post("posts", { ...userData })
      .then((res) => dispatch(addUserSuccess(res.data)))
      .catch((err) => dispatch(addUserFail(err.errorMessage)));
  };
};
