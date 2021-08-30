import {Action} from "../actions";
import {ActionType} from "../actions-types";
import {InitalGalleryData} from "../../../pages";

interface GalleryStateInterface {
    loading: boolean;
    createLoading: boolean;
    error: string | null;
    gallery: InitalGalleryData;
    uploadedFileUrl: string | null
}

const initialState = {
    loading: false,
    createLoading: false,
    error: null,
    gallery: null,
    uploadedFileUrl: null
};

/**
 * @param state
 * @param action
 */
const reducere = (
    state: GalleryStateInterface = initialState,
    action: Action
): GalleryStateInterface => {
    switch (action.type) {

        case ActionType.GALLERY_CREATE_INIT:
            return {
                ...state,
                createLoading: true,
                loading: true
            };
        case ActionType.GALLERY_CREATE_SUCCESS:
            return {
                ...state,
                createLoading: false,
            };
        case ActionType.GALLERY_CREATE_FAILED:
            return {
                ...state,
                createLoading: false,
                error: action.payload,
            };
        case ActionType.GALLERY_LIST_INIT:
            return {
                ...state,
                loading: true,
            };

        case ActionType.GALLERY_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                gallery: action.payload,
            };

        case ActionType.GALLERY_LIST_FAILED:
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
