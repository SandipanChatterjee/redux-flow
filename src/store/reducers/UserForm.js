import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  ADD_USER_LOADING,
} from "../actions/actionTypes";

const initialState = {
  newUser: {},
  errorMessage: null,
  loading: null,
};

const loading = (state, action) => {
  return {
    ...state,
    loading: action.loading,
  };
};

const addUserSuccess = (state, action) => {
  return {
    ...state,
    newUser: { ...action.userData },
    loading: false,
  };
};

const addUserFail = (state, action) => {
  return {
    ...state,
    errorMessage: action.errorMessage,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      return addUserSuccess(state, action);
    case ADD_USER_FAIL:
      return addUserFail(state, action);
    case ADD_USER_LOADING:
      return loading(state, action);
    default:
      return state;
  }
};

export default reducer;
