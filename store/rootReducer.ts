import { combineReducers } from "redux";
import blog from "./blog/reducer"

const reducers = combineReducers({
  blog
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
