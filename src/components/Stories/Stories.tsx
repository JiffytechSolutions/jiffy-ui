import React, { useState, useEffect, useRef } from "react";
import { Pause, Play } from "../../storybook/Foundation/Icons/Icons";
import "./Stories.css";

const Stories = ({ items, timeout = 3000, customClass = "" }: StoriesI) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [newTime, setNewTime] = useState(timeout);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef: any = useRef<number>();
  const mouseLeaveRef: any = useRef<number>();
  const timeCheck = Date.now();
  // Setting active index
  const handleTimeout = () => {
    clearInterval(mouseLeaveRef.current);
    clearInterval(timerRef.current);
  };
  const handleImage = (e: string) => {
    handleTimeout();
    setIsPaused(false);
    setNewTime(timeout);
    setActiveIndex((prevIndex) =>
      e === "previous"
        ? (prevIndex + items.length - 1) % items.length
        : (prevIndex + 1) % items.length
    );
  };
  // Incrementing index after timeout
  const handleIncrementIndex = () => {
    handleTimeout();
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    setNewTime(timeout);
  };
  // Clearing timeout and calling increment index function
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(handleIncrementIndex, timeout);
    }
    return () => clearInterval(timerRef.current);
  }, [activeIndex]);
  // Pause Time
  const handlePause = () => {
    let currentTime = Date.now() - timeCheck;
    setNewTime(newTime - currentTime);
    setIsPaused(true);
    handleTimeout();
  };
  // Play
  const handlePlay = () => {
    setIsPaused(false);
    mouseLeaveRef.current = setInterval(handleIncrementIndex, newTime);
  };
  // Handling pause and play of time
  const handleTimeElapsed = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.type === "touchstart") {
      handlePause();
    } else if (e.type === "touchend") {
      handlePlay();
    }
  };
  return (
    <div
      className={`inte-stories ${customClass}`.replace(/\s\s+/g, " ").trim()}
      onTouchStart={(e) => handleTimeElapsed(e)}
      onTouchEnd={(e) => handleTimeElapsed(e)}
    >
      <div className="inte-stories__container">
        <figure>
          <img src={items[activeIndex].imageUrl} alt="story" />
          <figcaption>{items[activeIndex].imageCaption}</figcaption>
        </figure>
      </div>
      {items.length !== 1 && (
        <>
          <div className="inte-stories__control">
            <button onClick={() => handleImage("previous")}>Previous</button>
            <button onClick={() => handleImage("next")}>Next</button>
          </div>
          <div className="inte-stories__progressContainer">
            {items.map((i, index: number) => {
              return (
                <div key={index} className="inte-stories__progressItems">
                  <span
                    className={`${
                      index === activeIndex
                        ? "inte-stories__progressItems--active"
                        : ""
                    }`}
                    style={{
                      animationDuration: `${timeout}ms`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  ></span>
                </div>
              );
            })}
          </div>
          <div
            className={`inte-stories__pause-play ${
              isPaused
                ? "inte-stories__pause-play--paused"
                : "inte-stories__pause-play--play"
            }`}
            role="button"
            onClick={(e) => {
              if (!isPaused) {
                handlePause();
              } else {
                handlePlay();
              }
            }}
            aria-label={isPaused ? "play" : "pause"}
          >
            {!isPaused ? (
              <Pause size="24" color="var(--inte-P40)" />
            ) : (
              <Play size="24" color="var(--inte-P40)" />
            )}
          </div>
        </>
      )}
    </div>
  );
};
export interface StoriesI {
  items: Items[];
  timeout?: number;
  customClass?: string;
}
interface Items {
  imageUrl?: string;
  imageCaption?: string;
}
export default Stories;
