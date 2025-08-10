import React from 'react';
import '../Skeleton.css'
export interface SkeletonThumbnailI {
    size?: "ExtraSmall" | "Small" | "Medium" | "Large";
}

const SkeletonThumbnail = ({
    size = "Medium",
    ...props
}: SkeletonThumbnailI) => {
    const checkSize = (): string => {
        switch (size) {
            case "ExtraSmall":
                return "skeletonThumbnail--extraSmall";
            case "Small":
                return "skeletonThumbnail--small";
            case "Medium":
                return "skeletonThumbnail--medium";
            case "Large":
                return "skeletonThumbnail--large";
            default:
                return "skeletonThumbnail--medium";
        }
    };

    const ThumbnailSize = checkSize();

    return (
        <div className={`skeleton skeletonThumbnail ${ThumbnailSize}`}>
            <div className="skeleton-inner"></div>
        </div>
    );
}

export default SkeletonThumbnail
