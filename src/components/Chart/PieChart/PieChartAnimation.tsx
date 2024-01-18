import { useEffect } from "react";

// animation  effect
useEffect(() => {
  const svgElement: any = document.querySelector(".inte-pieChart svg");

  if (svgElement) {
    // Add a CSS keyframe animation on component mount
    svgElement.style.animation = "rotateAnimation 1s ease-in-out forwards";

    // Add a class to the SVG element after the animation completes
    const onAnimationEnd = () => {
      svgElement.classList.add("rotate");
      svgElement.removeEventListener("animationend", onAnimationEnd);
    };

    svgElement.addEventListener("animationend", onAnimationEnd);
  }
}, []);

// /* animation  */
// @keyframes rotateAnimation {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }

//   .inte-pieChart svg {
//     transform-origin: center;
//     transition: transform 0.3s ease;
//   }

//   .inte-pieChart svg.rotate {
//     transform: rotate(360deg);
//   }

// circle path
{
  /* <br /> */
}
// <br />
// <svg
// style={{ border: "1px solid silver" }}
// width="100"
// height="100"
// xmlns="http://www.w3.org/2000/svg"
// >
{
  /* <path d="M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z" /> */
}
{
  /* </svg> */
}
