export interface CarouselI {
  children: React.ReactNode;
  breakpoints?: BreakpointsI;
  beforeSlideChange?: (currentSlide: number, nextSlide: number) => void;
  afterSlideChange?: (currentSlide: number) => void;
  slidesToShow?: number;
  autoplaySpeed?: number;
  stagePadding?: number;
  spaceBetweenSlides?: number;
  isVerticalSlider?: boolean;
  slideUsingMouse?: boolean;
  slideUsingTouch?: boolean;
  showFadeEffect?: boolean;
  isAutoplay?: boolean;
  isEndless?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  pauseOnHover?: boolean;
  pauseOnDotsHover?: boolean;
  persistSlideOnRefresh?: boolean;
  staticId?: string | number;
  dotsPosition?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight";
  arrowPosition?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight"
    | "horizontalCenter";
  slideToClickedSlide?: boolean;
  ref?: React.RefObject<any>;
  syncWith?: React.RefObject<any> | null;
  customClass?: string;
}
export interface BreakpointsI {
  [key: number]: {
    slidesToShow?: number;
    isAutoplay?: boolean;
    autoplaySpeed?: number;
    isEndless?: boolean;
    showDots?: boolean;
    showArrows?: boolean;
    slideToClickedSlide?: boolean;
    spaceBetweenSlides?: number;
  };
}
