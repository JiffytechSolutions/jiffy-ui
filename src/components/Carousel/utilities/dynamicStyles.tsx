// Dynamic style
export const generateWrapperStyle = (
  isVerticalSlider: boolean,
  verticalSliderHeight: number,
  translateWidth: number,
  allowTransition: boolean
) => {
  const dynamicStyle: React.CSSProperties = {
    ...(isVerticalSlider
      ? {
          height: verticalSliderHeight + "px",
          transform: `translate3d(0,-${translateWidth}px,0)`,
        }
      : {
          transform: `translate3d(-${translateWidth}px,0,0)`,
        }),
    transition: !allowTransition
      ? "-webkit-transform 250ms ease 0s"
      : "-webkit-transform 0ms ease 0s",
  };
  return dynamicStyle;
};
// Slide style
export const generateSlideStyle = (
  isVerticalSlider: boolean,
  slideWidth: number,
  spaceBetweenSlides: any,
  fadeEffect: boolean
) => {
  const slideStyle: React.CSSProperties = {
    ...(!isVerticalSlider
      ? {
          width: slideWidth + "px",
          marginRight: spaceBetweenSlides + "px",
          ...(!fadeEffect && { flexShrink: 0 }),
        }
      : {
          height: slideWidth + "px",
          marginBottom: spaceBetweenSlides + "px",
        }),
  };
  return slideStyle;
};
// Fade style
export const fadeStyle: React.CSSProperties = {
  position: "relative",
};
