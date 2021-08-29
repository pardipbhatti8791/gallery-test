import { Action } from "../actions";
import { ActionType } from "../actions-types";

interface CategoriesStateInterface {
  loading: boolean;
  singleLoading: boolean;
  createLoading: boolean;
  error: string | null;
  data: string[];
  blogList: string[];
  singleBlog: any;
}

const initialState = {
  loading: false,
  createLoading: false,
  error: null,
  data: [],
  blogList: [],
  singleBlog: "",
  singleLoading: true,
};

/**
 * @param state
 * @param action
 */
const reducere = (
  state: CategoriesStateInterface = initialState,
  action: Action
): CategoriesStateInterface => {
  switch (action.type) {
    case ActionType.CATEGORIES_GET:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.CATEGORIES_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.CATEGORIES_GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    case ActionType.CATEGORY_CREATE_INIT:
      return {
        ...state,
        createLoading: true,
      };
    case ActionType.CATEGORY_CREATE_SUCCESS:
      return {
        ...state,
        createLoading: false,
      };
    case ActionType.CATEGORY_CREATE_FAILED:
      return {
        ...state,
        createLoading: false,
        error: action.payload,
      };
    case ActionType.CATEGORY_DELETE_INIT:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.CATEGORY_DELETE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case ActionType.BLOG_CREATE_INIT:
      return {
        ...state,
        createLoading: true,
      };
    case ActionType.BLOG_CREATE_SUCCESS:
      return {
        ...state,
        createLoading: false,
      };
    case ActionType.BLOG_CREATE_FAILED:
      return {
        ...state,
        createLoading: false,
        error: action.payload,
      };
    case ActionType.BLOG_LIST_INIT:
      return {
        ...state,
        loading: true,
      };

    case ActionType.BLOG_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        blogList: action.payload,
      };

    case ActionType.BLOG_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.BLOG_GET_INIT:
      return {
        ...state,
        singleLoading: true,
      };

    case ActionType.BLOG_GET_SUCCESS:
      return {
        ...state,
        singleLoading: false,
        singleBlog: action.payload,
      };

    case ActionType.BLOG_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.BLOG_UPDATE_INIT:
      return {
        ...state,
        singleLoading: true,
      };

    case ActionType.BLOG_UPDATE_SUCCESS:
      return {
        ...state,
        singleLoading: false,
      };

    case ActionType.BLOG_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducere;
