import { combineReducers } from "redux";
import UsersReducers from "./reducers/Users";
import UserForm from "./reducers/UserForm";
export const rootReducer = combineReducers({
  Users: UsersReducers,
  UserForm: UserForm,
});
