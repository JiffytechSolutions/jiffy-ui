// Get class for dot
const dotsAlignOptions: { [key: string]: string } = {
  bottomRight: "inte-carousel--dotsBottomRight",
  bottomLeft: "inte-carousel--dotsBottomLeft",
  bottomCenter: "inte-carousel--dotsBottomCenter",
  topLeft: "inte-carousel--dotsTopLeft",
  topRight: "inte-carousel--dotsTopRight",
  topCenter: "inte-carousel--dotsTopCenter",
};
// Get class for arrow
const arrowAlignOptions: { [key: string]: string } = {
  bottomRight: "inte-carousel--arrowBottomRight",
  bottomLeft: "inte-carousel--arrowBottomLeft",
  bottomCenter: "inte-carousel--arrowBottomCenter",
  topLeft: "inte-carousel--arrowTopLeft",
  topRight: "inte-carousel--arrowTopRight",
  topCenter: "inte-carousel--arrowTopCenter",
  horizontalCenter: "inte-carousel--arrowHorizontalCenter",
};
export const getArrowalign = (arrowalign = "bottomCenter") =>
  arrowAlignOptions[arrowalign] || "bottomCenter";
export const getDotsalign = (arrowalign = "bottomCenter") =>
  dotsAlignOptions[arrowalign] || "bottomCenter";
