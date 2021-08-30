import {ActionType} from "../actions-types";


interface CreateGalleryInit {
    type: ActionType.GALLERY_CREATE_INIT;
}

interface CreateGallerySuccess {
    type: ActionType.GALLERY_CREATE_SUCCESS;
}

interface CreateGalleryFailed {
    type: ActionType.GALLERY_CREATE_FAILED;
    payload: string;
}

interface ListGalleryInit {
    type: ActionType.GALLERY_LIST_INIT;
}

interface ListGallerySuccess {
    type: ActionType.GALLERY_LIST_SUCCESS;
    payload: any;
}

interface ListGalleryFailed {
    type: ActionType.GALLERY_LIST_FAILED;
    payload: string;
}

interface UploadGalleryInit {
    type: ActionType.GALLERY_LIST_INIT;
}

interface UploadGallerySuccess {
    type: ActionType.GALLERY_UPLOAD_SUCCESS;
}

interface UploadGalleryFailed {
    type: ActionType.GALLERY_LIST_FAILED;
    payload: string;
}

interface DeleteGalleryInit {
    type: ActionType.GALLERY_DELETE_INIT;
}

interface DeleteGallerySuccess {
    type: ActionType.GALLERY_DELETE_SUCCESS;
}

interface DeleteGalleryFailed {
    type: ActionType.GALLERY_DELETE_SUCCESS;
    payload: string;
}


export type Action =
    | CreateGalleryInit
    | CreateGallerySuccess
    | CreateGalleryFailed
    | ListGalleryInit
    | ListGallerySuccess
    | ListGalleryFailed
    | UploadGalleryInit
    | UploadGallerySuccess
    | UploadGalleryFailed
    | DeleteGalleryInit
    | DeleteGallerySuccess
    | DeleteGalleryFailed;
