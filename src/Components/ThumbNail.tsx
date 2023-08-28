import React, {FC} from "react";

export const ViewThumbnail: FC<{url: string; onDelete: () => void; onImageClick: () => void}> = ({
    url,
    onDelete,
    onImageClick,
}) => {
    return <span className={'image-thumbnail-container'}>
        <button onClick={onDelete} className={'image-thumbnail-delete'}>delete</button>
        <img 
        className={'image-thumbnail'}
            onClick={onImageClick}
            src={url} 
            alt={'img'} 
        />
    </span>
}