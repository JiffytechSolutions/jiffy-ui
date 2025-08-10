import React from "react";
import "./Thumbnail.css";
export interface ThumbnailI {
    size?: "ExtraSmall" | "Small" | "Medium" | "Large";
    source: string;
    alt: string;
    objectFit?: "Fill" | "Contain" | "Cover" | "Default";
    onClick?: () => void;
}

const Thumbnail = ({
    size = "Large",
    source = "https://t4.ftcdn.net/jpg/05/18/69/85/360_F_518698520_Xk9tIwoYpyX6kkVsF6GpQ1z7sKXO8YRz.jpg",
    alt = "Alt text",
    objectFit = "Default",
    onClick,
    ...props
}: ThumbnailI) => {
    const checkSize = (): string => {
        switch (size) {
            case "ExtraSmall":
                return "thumbnail--extraSmall";
            case "Small":
                return "thumbnail--small";
            case "Medium":
                return "thumbnail--medium";
            case "Large":
                return "thumbnail--large";
            default:
                return "thumbnail--medium";
        }
    };

    const checkObjectFit = (): string => {
        switch (objectFit) {
            case "Fill":
                return "thumbnail--fill";
            case "Contain":
                return "thumbnail--contain";
            case "Cover":
                return "thumbnail--cover";
            case "Default":
                return "thumbnail--default";
            default:
                return "thumbnail--default";
        }
    }

    const ThumbnailSize = checkSize();
    const imageFit = checkObjectFit();

    return (

        <div className={`thumbnail ${ThumbnailSize} ${imageFit} ${onClick && "thumbnail-click"}`} onClick={onClick}>
            <img className="thumbnail-img" src={source} alt={alt} />
        </div>

    );
}

export default Thumbnail;
