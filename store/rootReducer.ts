import { combineReducers } from "redux";
import gallery from "./gallery/reducer"

const reducers = combineReducers({
  gallery
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
