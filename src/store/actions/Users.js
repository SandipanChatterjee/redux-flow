import { USERS_DATA_FETCH_SUCCESS, USERS_DATA_FETCH_FAIL } from "./actionTypes";
import axios from "../../shared/eaxios";
export const usersDataFetchSuccess = (userData) => {
  return {
    type: USERS_DATA_FETCH_SUCCESS,
    userData,
  };
};

export const usersDataFetchFail = (errMsg) => {
  return {
    type: USERS_DATA_FETCH_FAIL,
    errorMessage: errMsg,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("posts")
      .then((res) => {
        dispatch(usersDataFetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(usersDataFetchFail(err.message));
      });
  };
};
