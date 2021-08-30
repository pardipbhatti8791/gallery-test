import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { galleryActionCreators } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    Object.assign({}, galleryActionCreators),
    dispatch
  );
};
