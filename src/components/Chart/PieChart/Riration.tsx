import React, { useEffect, useState } from "react";

const Riration = () => {
  const [initialAnimationPlayed, setInitialAnimationPlayed] = useState(false);
  // animation effect
  useEffect(() => {
    // Trigger the rotation animation when the component mounts
    if (!initialAnimationPlayed) {
      const paths = document.querySelectorAll(".inte-pieChart__path");
      paths.forEach((path: any, index) => {
        path.style.animation = `rotateAnimation 0.5s ease-out ${index * 0.1}s`;
      });

      // Set the state to indicate that the initial animation has played
      setInitialAnimationPlayed(true);
    }
  }, [initialAnimationPlayed]);

  // useEffect(() => {
  //   // Trigger the rotation animation when the component mounts
  //   if (!initialAnimationPlayed) {
  //     const paths = document.querySelectorAll(".inte-pieChart__path");
  //     paths.forEach((path: any, index) => {
  //       // Set the initial rotation to start from the top (90 degrees)
  //       path.style.transform = `rotate(${
  //         90 + (index * 360) / paths.length
  //       }deg)`;

  //       90+(0*360)/5
  //       path.style.animation = `rotateAnimation 0.5s ease-out ${index * 0.1}s`;
  //     });

  //     // Set the state to indicate that the initial animation has played
  //     setInitialAnimationPlayed(true);
  //   }
  // }, [initialAnimationPlayed]);

  // new

  // useEffect(() => {
  //   // Trigger the rotation animation when the component mounts
  //   if (!initialAnimationPlayed) {
  //     const svg = document.querySelector("svg");
  //     const paths = svg ? svg.querySelectorAll(".inte-pieChart__path") : [];

  //     paths.forEach((path: any, index) => {
  //       path.style.animation = `rotateAnimation 0.5s ease-out ${index * 0.1}s`;

  //       // Log the initial rotation angle of each slice with respect to the SVG
  // const svgRect = svg?.getBoundingClientRect();
  // const pathRect = path?.getBoundingClientRect();

  // if (svgRect && pathRect) {
  //   const centerX = svgRect.left + svgRect.width / 2;
  //   const centerY = svgRect.top + svgRect.height / 2;

  //   const deltaX = centerX - (pathRect.left + pathRect.width / 2); // Change this line
  //   const deltaY = centerY - (pathRect.top + pathRect.height / 2);

  //   const initialAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  //   console.log(`Rotation ${index}: ${initialAngle} degrees`);
  // }
  //     });

  //     // Set the state to indicate that the initial animation has played
  //     setInitialAnimationPlayed(true);
  //   }
  // }, [initialAnimationPlayed]);

  ///

  // const [rotateP, setRotateP] = useState([0, 0, 0, 0, 0, 0]);
  // useEffect(() => {
  //   // Trigger the rotation animation when the component mounts
  //   if (!initialAnimationPlayed) {
  //     const paths = document.querySelectorAll(".inte-pieChart__path");
  //     const totalPercentage = getTotalPercentage(chartData);
  //     let currTot = 0;
  //     const pointArr = Array.from(paths).map((path: any, index) => {
  //       //  path.style.animation = `rotateAnimation 0.5s ease-out ${index * 0.1}s`;

  //       // Calculate the percentage for each path area
  //       const currentSlicePercentage =
  //         (Number(chartData[index].value) / totalPercentage) * 100;

  //       currTot = currTot + currentSlicePercentage;

  //       return currTot;
  //     });

  //     // setRotateP(pointArr);
  //     const a = pointArr.map((val) => {
  //       return -((360 * val) / 100);
  //     });

  //     setRotateP(a);

  //     setTimeout(() => {
  //       setRotateP([0, 0, 0, 0, 0, 0]);
  //     }, 500);

  //     const isPageLoading = !document.hidden;

  //     // Set rotateP based on whether the page is loading or not
  //     setRotateP(isPageLoading ? a : [0, 0, 0, 0, 0, 0]);
  //   }
  // }, [initialAnimationPlayed]);
  // console.log(rotateP);

  return <div>Riration</div>;
};

export default Riration;
