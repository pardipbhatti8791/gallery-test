import React from "react";

type GalleryItemProps = {
    item: {
        id: string
        title: string
        description: string
        imageUrl: string
    }
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
    return (
        <li>
            <div className="item">
                <img src={`http://localhost:3001/api/v1/${item.imageUrl}`}/>
            </div>
        </li>
    )
}

export default GalleryItem
