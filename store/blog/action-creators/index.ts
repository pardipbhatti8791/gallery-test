import { Dispatch } from "redux";

import { ActionType } from "../actions-types";
import { Action } from "../actions";
import { apiUri } from "../../../services/apiEndPoints";
import service from "../../../services/service";

export const listBlog = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.BLOG_LIST_INIT,
  });
  try {
    const { data } = await service.get(`${apiUri.blog.blogListGet}?type=all`);

      dispatch({
        type: ActionType.BLOG_LIST_SUCCESS,
        payload: data,
      });

  } catch (e) {
    dispatch({
      type: ActionType.BLOG_LIST_FAILED,
      payload: e.message,
    });
  }
};

/**
 * @param formData
 */
export const createNewBlog = (
  formData: any,
  history: any
) => async (dispatch: Dispatch<Action | any>) => {
  dispatch({
    type: ActionType.BLOG_CREATE_INIT,
  });
  try {
    const { data } = await service.post(apiUri.blog.blogPost, formData);

      dispatch({
        type: ActionType.BLOG_CREATE_SUCCESS,
      });

  } catch (e) {
    dispatch({
      type: ActionType.BLOG_CREATE_FAILED,
      payload: e.message,
    });
  }
};

