import { createStore } from "redux";
import { rootReducer } from "./combineReducers";

import { enhancers } from "./enhancer";

export const store = createStore(rootReducer, enhancers);
