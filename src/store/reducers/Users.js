import {
  USERS_DATA_FETCH_SUCCESS,
  USERS_DATA_FETCH_FAIL,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  errorMessage: null,
};

const usersDataFetchSuccess = (state, action) => {
  return {
    ...state,
    items: action.userData,
  };
};

const usersDataFetchFail = (state, action) => {
  return {
    ...state,
    errorMessage: action.errorMessage,
  };
};

const reducer = (state = initialState, action) => {
  console.log("action ###", action);
  switch (action.type) {
    case USERS_DATA_FETCH_SUCCESS: {
      return usersDataFetchSuccess(state, action);
    }
    case USERS_DATA_FETCH_FAIL: {
      return usersDataFetchFail(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
