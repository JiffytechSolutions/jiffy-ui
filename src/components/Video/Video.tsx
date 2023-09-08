/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useRef } from "react";
import "./Video.css";

const Video: React.FC<VideoI> = ({
  src,
  width,
  height,
  controls,
  autoPlay,
  loop,
  muted,
  poster,
  preload,
  type,
}: VideoI) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const videoRef = useRef<any>(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const videoPreload = () => {
    switch (preload) {
      case "auto":
        return "auto";
      case "metadata":
        return "metadata";
      case "none":
        return "none";
    }
  };

  const VideoPreload = videoPreload();
  return (
    <>
      <div className="inte-Video--Section">
        <video
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoPlay}
          preload={VideoPreload}
          loop={loop}
          muted={muted}
          poster={poster}
          onClick={() => handleVideoPress()}
          ref={videoRef}
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export interface VideoI {
  src?: string;
  width?: string;
  height?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  type?: string;
  preload?: "auto" | "metadata" | "none";
}

export default Video;
