import { BlogInterface } from "../../../pages/private/dashboard/blog/interfaces/blog.interface";
import { ActionType } from "../actions-types";


interface CategoriesGetAction {
  type: ActionType.CATEGORIES_GET;
}

interface CategoriesSuccessAction {
  type: ActionType.CATEGORIES_GET_SUCCESS;
  payload: string[];
}

interface CategoriesErrorAction {
  type: ActionType.CATEGORIES_GET_ERROR;
  payload: string;
}

interface CategoryCreateAction {
  type: ActionType.CATEGORY_CREATE_INIT;
}

interface CategoryCreateActionSuccess {
  type: ActionType.CATEGORY_CREATE_SUCCESS;
}

interface CategoryCreateFailed {
  type: ActionType.CATEGORY_CREATE_FAILED;
  payload: string;
}

interface CategoryDeleteInit {
  type: ActionType.CATEGORY_DELETE_INIT;
}

interface CategoryDeleteSuccess {
  type: ActionType.CATEGORY_DELETE_SUCCESS;
}

interface CategoryDeleteFailed {
  type: ActionType.CATEGORY_DELETE_FAILED;
  payload: string;
}

interface CreateBlogInit {
  type: ActionType.BLOG_CREATE_INIT;
}

interface CreateBlogSuccess {
  type: ActionType.BLOG_CREATE_SUCCESS;
}

interface CreateBlogFailed {
  type: ActionType.BLOG_CREATE_FAILED;
  payload: string;
}

interface ListBlogInit {
  type: ActionType.BLOG_LIST_INIT;
}

interface ListBlogSuccess {
  type: ActionType.BLOG_LIST_SUCCESS;
  payload: string[];
}

interface ListBlogFailed {
  type: ActionType.BLOG_LIST_FAILED;
  payload: string;
}

interface GetBlogInit {
  type: ActionType.BLOG_GET_INIT;
}

interface GetBlogSuccess {
  type: ActionType.BLOG_GET_SUCCESS;
  payload: BlogInterface;
}

interface GetBlogFailed {
  type: ActionType.BLOG_GET_FAILED;
  payload: string;
}

interface UpdateBlogInit {
  type: ActionType.BLOG_UPDATE_INIT;
}

interface UpdateBlogSuccess {
  type: ActionType.BLOG_UPDATE_SUCCESS;
  payload: BlogInterface;
}

interface UpdateBlogFailed {
  type: ActionType.BLOG_UPDATE_FAILED;
  payload: string;
}

export type Action =
  | CategoriesGetAction
  | CategoriesSuccessAction
  | CategoriesErrorAction
  | CategoryCreateAction
  | CategoryCreateActionSuccess
  | CategoryCreateFailed
  | CategoryDeleteInit
  | CategoryDeleteSuccess
  | CategoryDeleteFailed
  | CreateBlogInit
  | CreateBlogSuccess
  | CreateBlogFailed
  | ListBlogInit
  | ListBlogSuccess
  | ListBlogFailed
  | GetBlogInit
  | GetBlogSuccess
  | GetBlogFailed
  | UpdateBlogInit
  | UpdateBlogSuccess
  | UpdateBlogFailed;
