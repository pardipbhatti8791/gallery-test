import {Dispatch} from "redux";

import {ActionType} from "../actions-types";
import {Action} from "../actions";
import {apiUri} from "../../../services/apiEndPoints";
import service from "../../../services/service";

export const listGallery = (currentPage: number = 1) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.GALLERY_LIST_INIT,
    });
    try {
        const { data } = await service.get(`${apiUri.gallery.galleryListGet}/?page=${currentPage}`);
        dispatch({
            type: ActionType.GALLERY_LIST_SUCCESS,
            payload: data,
        });

    } catch (e) {
        dispatch({
            type: ActionType.GALLERY_LIST_FAILED,
            payload: e.message,
        });
    }
};

/**
 * @param formData
 */
export const uploadGallery = (
    formData: any,
    page: number
) => async (dispatch: Dispatch<Action | any>) => {
    dispatch({
        type: ActionType.GALLERY_UPLOAD_INIT,
    });
    try {
        const data: any = await service.post(apiUri.gallery.galleryUploadPost, formData);
        dispatch(listGallery(page))
        return data.data
    } catch (e) {
        dispatch({
            type: ActionType.GALLERY_UPLOAD_FAILED,
            payload: e.message,
        });
    }
};

/**
 * @param formData
 */
export const createGallery = (
    formData: any,
) => async (dispatch: Dispatch<Action | any>) => {
    dispatch({
        type: ActionType.GALLERY_CREATE_INIT,
    });
    try {
        const d = await service.post(apiUri.gallery.galleryPost, formData);
        dispatch({
            type: ActionType.GALLERY_CREATE_SUCCESS,
        });

        return d

    } catch (e) {
        dispatch({
            type: ActionType.GALLERY_CREATE_FAILED,
            payload: e.message,
        });
    }
};

/**
 * @param formData
 */
export const deleteGallery = () => async (dispatch: Dispatch<Action | any>) => {
    dispatch({
        type: ActionType.GALLERY_DELETE_INIT,
    });
    try {
        const d = await service.post(apiUri.gallery.galleryDeletePost);
        dispatch({
            type: ActionType.GALLERY_DELETE_SUCCESS,
        });

        return d

    } catch (e) {
        dispatch({
            type: ActionType.GALLERY_DELETE_FAILED,
            payload: e.message,
        });
    }
};

