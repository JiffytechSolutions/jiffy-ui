import React from 'react';
import '../Skeleton.css'
export interface SkeletonButtonI {
    size?: "XSmall" | "Small" | "Medium" | "Large";
}

const SkeletonButton = ({
    size = "Medium",
    ...props
}: SkeletonButtonI) => {
    const checkSize = (): string => {
        switch (size) {

            case "XSmall":
                return "SkeletonButton--extraSmall";
            case "Small":
                return "SkeletonButton--small";
            case "Medium":
                return "SkeletonButton--medium";
            case "Large":
                return "SkeletonButton--large";
            default:
                return "SkeletonButton--medium";
        }
    };

    const ThumbnailSize = checkSize();

    return (
        <div className={`skeleton SkeletonButton ${ThumbnailSize}`}>
            <div className="skeleton-inner"></div>
        </div>
    );
}
export default SkeletonButton;
