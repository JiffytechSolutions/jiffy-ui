// eslint-disable @typescript-eslint/explicit-module-boundary-types /
import React from "react";
import Progressbar from "../ProgressBar/Progressbar";
import Text from "../Text/Text";
import "./Loader.css";

const Loader: React.FC<LoaderI> = ({
  title,
  subtitle,
  type = "L-1",
  percentage,
}: LoaderI) => {
  const items = {
    Loader1: (
      <div className="inte-Loader">
        <div className="inte-Loader--Items">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              id="Rectangle"
              x="0.263672"
              y="0.777832"
              width="35"
              height="35"
              rx="4"
              fill="#431BBC"
            />
          </svg>
          <svg
            width="39"
            height="34"
            viewBox="0 0 39 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Polygon"
              d="M15.9392 2C17.4788 -0.666666 21.3278 -0.666667 22.8674 2L37.5899 27.5C39.1295 30.1667 37.205 33.5 34.1258 33.5H4.68089C1.60169 33.5 -0.322814 30.1667 1.21679 27.5L15.9392 2Z"
              fill="#D9D9D9"
            />
          </svg>
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              id="Ellipse"
              cx="18.7363"
              cy="18.0835"
              r="18"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className="inte-Loader--Text">
          <Text as="h3" type="T-4">
            {title}
          </Text>
        </div>
      </div>
    ),
    Loader2: (
      <div className="inte-pageLoader">
        <div className="inte-loading"></div>
        <div className="inte-loading--Transform mt-10">
          <b>L</b>
          <b>O</b>
          <b>A</b>
          <b>D</b>
          <b>I</b>
          <b>N</b>
          <b>G</b>
        </div>
      </div>
    ),
    Loader3: (
      <div className="inte-Loader--TypeThree">
        <div className="inte-Loader--TypeThreeInner">
          <div className="inte-Loader--Icon">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="120" rx="60" fill="#D7EAE2" />
              <path
                d="M80 45L52.5 72.5L40 60"
                stroke="#027A48"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Text as="h1" alignment="center" type="T-4">
            {title}
          </Text>
          <Text alignment="center">{subtitle}</Text>
          <Progressbar
            progessSize="thin"
            isAnimating
            percentage={percentage}
          ></Progressbar>
        </div>
      </div>
    ),
  };
  const loaderComponents = {
    "L-3": items.Loader3,
    "L-2": items.Loader2,
    "L-1": items.Loader1,
  };
  const loaderType = loaderComponents[type];
  return loaderType;
};

export interface LoaderI {
  title?: string | any;
  subtitle?: string;
  type?: "L-1" | "L-2" | "L-3";
  percentage?: number;
}

export default Loader;
