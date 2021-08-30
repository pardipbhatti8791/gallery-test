import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";

type UploadComponentProps = {
    imageUrlFromServer: Function,
    page: number
}

const UploadComponent: React.FC<UploadComponentProps> = ({ imageUrlFromServer, page }) => {
    const { uploadGallery } = useActions()

    const uploadFile = async (data: any) => {
        if (data.target.files[0] !== undefined) {
            const formData = new FormData()
            formData.append("file", data.target.files[0])
            const d: any = await uploadGallery(formData, page)
            imageUrlFromServer(d.url)
        }
    }

    return (
        <>
            <div className="upload-file">
                <label>Drag photos here</label>
                <input type="file" onChange={uploadFile} onDrop={uploadFile}/>
            </div>

        </>
    )
}

export default UploadComponent
