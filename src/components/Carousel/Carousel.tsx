import React, { forwardRef, useEffect, useId, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "../../storybook/Foundation/Icons/Icons";
import { getArrowalign, getDotsalign } from "./utilities/getClasses";
import { CarouselI } from "./utilities/types";
import {
  fadeStyle,
  generateWrapperStyle,
  generateSlideStyle,
} from "./utilities/dynamicStyles";
import getClassNames from "../../utilities/getClassnames";
import "./Carousel.css";

const Carousel = forwardRef(
  (
    {
      children,
      slidesToShow = 3,
      isEndless = false,
      isAutoplay = false,
      autoplaySpeed = 1000,
      showDots = true,
      showArrows = true,
      slideToClickedSlide = false,
      showFadeEffect = false,
      slideUsingMouse = true,
      slideUsingTouch = true,
      isVerticalSlider = false,
      pauseOnHover = false,
      pauseOnDotsHover = false,
      persistSlideOnRefresh = false,
      syncWith,
      breakpoints,
      spaceBetweenSlides,
      stagePadding,
      customClass = "",
      dotsPosition = "bottomCenter",
      arrowPosition = "bottomCenter",
      staticId,
      beforeSlideChange,
      afterSlideChange,
    }: CarouselI,
    ref: any
  ) => {
    const carouselChildren = React.Children.toArray(children);
    const [numOfSlidesToShow, setNumOfSlidesToShow] = useState(
      showFadeEffect ? 1 : slidesToShow
    );
    const [hasDots, setHasDots] = useState(showDots);
    const [hasArrows, setHasArrows] = useState(showArrows);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeSlides, setActiveSlides] = useState<number[]>([]);
    const [slideWidth, setSlideWidth] = useState<any>(
      isVerticalSlider ? "" : 0
    );
    const [translateWidth, setTranslateWidth] = useState(0);
    const [allowTransition, setAllowTransition] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [wrapperHeight, setWrapperHeight] = useState<any>(
      isVerticalSlider ? "" : 0
    );
    const timerRef: any = useRef();
    const timeoutRef: any = useRef();
    const carouselWrapperRef: any = useRef();
    const carouselContainerRef: any = useRef();
    const slideChange: any = useRef();
    const arrowAlign: any = showArrows && getArrowalign(arrowPosition);
    const dotsAlign: any = showDots && getDotsalign(dotsPosition);
    let startX: number = 0;
    let endX: number = 0;
    let startY: number = 0;
    let endY: number = 0;
    // Get required width , stagePadding
    const calculateWidth = (numberofSlides: number) => {
      const getRequiredWidth = stagePadding
        ? (stagePadding / numberofSlides) * 2
        : 0;
      const adjustedSlideWidth = spaceBetweenSlides
        ? spaceBetweenSlides - spaceBetweenSlides / Math.floor(numberofSlides)
        : 0;
      const width = isVerticalSlider
        ? carouselContainerRef.current.children[activeIndex].offsetHeight -
          adjustedSlideWidth -
          getRequiredWidth
        : carouselWrapperRef.current.offsetWidth / numberofSlides -
          adjustedSlideWidth -
          getRequiredWidth;
      return {
        width: width,
        translatingWidthEndless: spaceBetweenSlides
          ? Math.floor(numberofSlides) * spaceBetweenSlides
          : 0,
      };
    };
    // Handling breakpoints
    function getSettings() {
      if (breakpoints) {
        let sortBreakpoint = Object.keys(breakpoints)
          .map((breakpoint) => parseInt(breakpoint))
          .sort((a, b) => a - b);
        const currentBreakpoint = sortBreakpoint.find(
          (breakpoint) => window.innerWidth < breakpoint
        );
        let numOfSlides: any = slidesToShow;
        if (currentBreakpoint) {
          const index = Object.keys(breakpoints).indexOf(
            `${currentBreakpoint}`
          );
          let newSlides: any = Object.values(breakpoints)[index];
          numOfSlides = newSlides.slidesToShow;
          setNumOfSlidesToShow(numOfSlides);
          setHasDots(newSlides.showDots);
          setHasArrows(newSlides.showArrows);
        }
        handleElement(numOfSlides);
      } else {
        onComponentRender();
        setActiveIndex(0);
      }
    }
    // Window resize function
    const handleElement = (numOfSlides: any) => {
      const { width, translatingWidthEndless } = calculateWidth(numOfSlides);
      setSlideWidth(width);
      setTranslateWidth(
        isEndless ? width * numOfSlides + translatingWidthEndless : 0
      );
      isEndless && setAllowTransition(true);
      setActiveIndex(0);
    };
    // Get index from session storage
    const handleSlideOnPageRefresh = (index: number, width: number) => {
      const obj = { index: index, translateWidth: width };
      const stringifiedObj = JSON.stringify(obj);
      sessionStorage.setItem("indexActive" + (staticId || "0"), stringifiedObj);
    };
    // Execute when component render
    const onComponentRender = () => {
      const numOfItems = Math.floor(numOfSlidesToShow);
      const { width, translatingWidthEndless } =
        calculateWidth(numOfSlidesToShow);
      setWrapperHeight(
        carouselContainerRef.current.children[activeIndex].offsetHeight *
          numOfSlidesToShow
      );
      setAllowTransition(true);
      if (isEndless && !showFadeEffect) {
        setSlideWidth(width);
        setTranslateWidth(width * numOfItems + translatingWidthEndless);
        persistSlideOnRefresh &&
          handleSlideOnPageRefresh(
            0,
            width * numOfSlidesToShow + translatingWidthEndless
          );
      } else {
        persistSlideOnRefresh && handleSlideOnPageRefresh(0, 0);
        setSlideWidth(
          showFadeEffect ? carouselWrapperRef.current.offsetWidth : width
        );
      }
    };
    // Getting required width of wrapper and list
    useEffect(() => {
      const stringifiedObj: any =
        persistSlideOnRefresh &&
        sessionStorage.getItem("indexActive" + (staticId || "0"));
      if (stringifiedObj) {
        onComponentRender();
        const obj = JSON.parse(stringifiedObj);
        setActiveIndex(obj.index);
        setTranslateWidth(obj.translateWidth);
      } else {
        breakpoints && getSettings();
        !breakpoints && onComponentRender();
      }
      window.addEventListener("resize", getSettings);
      return () => window.removeEventListener("resize", getSettings);
    }, []);
    // setting active slides based on slides to show
    useEffect(() => {
      const len = carouselChildren.length + 1 - Math.floor(numOfSlidesToShow);
      setActiveSlides(Array.from({ length: len }, (_, index) => index));
    }, [numOfSlidesToShow]);
    // start autoplay
    useEffect(() => {
      if (persistSlideOnRefresh) {
        handleSlideOnPageRefresh(activeIndex, translateWidth);
      }
      if (
        isAutoplay &&
        !isPaused &&
        (isEndless || activeSlides.length - 1 !== activeIndex)
      ) {
        handleAutoplay();
      }
      if (!isEndless && activeIndex === 0 && !persistSlideOnRefresh) {
        setTranslateWidth(0);
      }
      return () => clearInterval(timerRef.current);
    }, [activeIndex, isPaused, translateWidth]);
    // Handle autoplay
    const handleAutoplay = () => {
      timerRef.current = setInterval(
        () => handleActiveSlide("next"),
        autoplaySpeed
      );
    };
    // Handle Slide Change
    const handleSlideChange = () => {
      const callAfterSlideChange = () => afterSlideChange?.(activeIndex);
      beforeSlideChange?.(activeIndex, activeIndex + 1);
      if (afterSlideChange) {
        slideChange.current = setTimeout(() => {
          callAfterSlideChange();
        }, 250);
      }
    };
    const getRemainingWidth = () => {
      const numOfItems = Math.floor(numOfSlidesToShow);
      const wrapperWidth = carouselWrapperRef.current.offsetWidth;
      const remainingWidth =
        wrapperWidth -
        numOfItems * slideWidth -
        (spaceBetweenSlides ? spaceBetweenSlides * (numOfItems - 1) : 0) -
        (stagePadding ? stagePadding * 2 : 0);
      return {
        dragRemainingWidth: slideWidth - remainingWidth,
        slideByDotsWidth: remainingWidth,
      };
    };
    // Handle translate width
    const handleTranslatewidth = (type: any) => {
      handleSlideChange();
      const { width, translatingWidthEndless } =
        calculateWidth(numOfSlidesToShow);
      const numOfItems = Math.floor(numOfSlidesToShow);
      setAllowTransition(false);
      let widthInCaseOfHalf: any = null;
      if (
        !isEndless &&
        !Number.isInteger(numOfSlidesToShow) &&
        ((type === "next" &&
          activeIndex === carouselChildren.length - (1 + numOfItems)) ||
          activeIndex === carouselChildren.length - 1)
      ) {
        widthInCaseOfHalf = getRemainingWidth().dragRemainingWidth;
      }
      setTranslateWidth(
        type === "next"
          ? (translateWidth) =>
              translateWidth +
              (widthInCaseOfHalf ?? width) +
              (spaceBetweenSlides ?? 0)
          : (translateWidth) =>
              translateWidth -
              (widthInCaseOfHalf ?? width) -
              (spaceBetweenSlides ?? 0)
      );

      if (
        type === "next" &&
        activeIndex === carouselChildren.length - 1 &&
        isEndless
      ) {
        timeoutRef.current = setTimeout(() => {
          setTranslateWidth(slideWidth * numOfItems + translatingWidthEndless);
          setAllowTransition(true);
        }, 200);
      } else if (type === "prev" && activeIndex === 0 && isEndless) {
        const lastTranslateWidth =
          slideWidth * carouselChildren.length + (numOfItems - 1) * slideWidth;
        const widthWhileSpaceBetweenSlides = spaceBetweenSlides
          ? spaceBetweenSlides * carouselChildren.length +
            (numOfItems - 1) * spaceBetweenSlides
          : 0;
        timeoutRef.current = setTimeout(() => {
          setTranslateWidth(lastTranslateWidth + widthWhileSpaceBetweenSlides);
          setAllowTransition(true);
        }, 200);
      }
    };
    // handle slide changes using previous/next button
    const handleActiveSlide = (type: "prev" | "next") => {
      if (!showFadeEffect) {
        handleTranslatewidth(type);
      }
      setActiveIndex((activeIndex) => {
        const indexOffset = type === "prev" ? -1 : 1;
        const nextIndex =
          (activeIndex + indexOffset + carouselChildren.length) %
          carouselChildren.length;
        if (
          isEndless ||
          nextIndex + Math.floor(numOfSlidesToShow) <= carouselChildren.length
        ) {
          return nextIndex;
        }
        return activeIndex;
      });
    };
    // Handle slide by clicking on the slide
    const handleSlideByClickOnSlide = (index: any, type: boolean) => {
      setAllowTransition(false);
      let translateBy: any =
        translateWidth + slideWidth * (index - activeIndex);
      if (isEndless) {
        setActiveIndex(index);
        if (type) {
          const translateByClick = spaceBetweenSlides
            ? (index - activeIndex) * spaceBetweenSlides
            : 0;
          const tempTranslate = carouselChildren.length - activeIndex + index;
          setTranslateWidth(
            (translateWidth) => translateWidth + slideWidth * tempTranslate
          );
          timeoutRef.current = setTimeout(() => {
            setAllowTransition(true);
            setTranslateWidth(translateBy + translateByClick);
          }, 200);
        } else {
          const translateByClick: number = spaceBetweenSlides
            ? spaceBetweenSlides * (index - activeIndex)
            : 0;
          setTranslateWidth(translateBy + translateByClick);
        }
      } else {
        if (activeSlides.length <= index) {
          const translateByClick: number = spaceBetweenSlides ?? 0;
          translateBy = activeSlides.length - 1 - activeIndex;
          translateBy !== 0 &&
            setTranslateWidth(
              (translateWidth) =>
                translateWidth + slideWidth * translateBy + translateByClick
            );
          setActiveIndex((activeIndex) => activeIndex + translateBy);
        } else {
          const translateByClick: number = spaceBetweenSlides
            ? spaceBetweenSlides * index
            : 0;
          setActiveIndex(index);
          let getRequiredWidth: any = null;
          if (
            index ===
            carouselChildren.length - Math.floor(numOfSlidesToShow)
          ) {
            getRequiredWidth = getRemainingWidth().slideByDotsWidth;
          }
          translateBy =
            slideWidth * index + translateByClick - (getRequiredWidth || 0);
          setTranslateWidth(translateBy);
        }
      }
    };
    // handle slide changes using dots
    const handleSlideUsingDots = (index: number) => {
      setAllowTransition(false);
      let translateBy: any =
        translateWidth + slideWidth * (index - activeIndex);
      setActiveIndex(index);
      if (isEndless) {
        const translateByDots: number = spaceBetweenSlides
          ? spaceBetweenSlides * (index - activeIndex)
          : 0;
        setTranslateWidth(translateBy + translateByDots);
      } else {
        const translateByDots: number = spaceBetweenSlides
          ? spaceBetweenSlides * index
          : 0;
        let getRequiredWidth: any = null;
        if (index === carouselChildren.length - Math.floor(numOfSlidesToShow)) {
          getRequiredWidth = getRemainingWidth().slideByDotsWidth;
        }
        translateBy =
          slideWidth * index + translateByDots - (getRequiredWidth || 0);
        setTranslateWidth(translateBy);
      }
    };
    // Attaching function to the ref which are required to slide the carousel
    if (ref)
      ref.current = {
        index: activeIndex,
        currentIndex: currentIndex,
        itemsToShow: Math.floor(numOfSlidesToShow),
        handleUsingArrows: handleActiveSlide,
        handleUsingDots: handleSlideUsingDots,
        handleByClick: handleSlideByClickOnSlide,
      };
    // Pause on hover
    const handleMouseEnter = () => {
      clearInterval(timerRef.current);
      setIsPaused(true);
    };
    // Play on leave
    const handleMouseLeave = () => {
      setIsPaused(false);
      timerRef.current = setInterval(
        () => handleActiveSlide("next"),
        autoplaySpeed
      );
    };
    // Stop button from clicking
    const stopButtonClick = () => {
      setIsSliding(true);
      setTimeout(() => setIsSliding(false), 250);
    };
    // handle slide using mouse
    const handleMouseDown = (e: any) => {
      e.preventDefault();
      if (isSliding) return;
      stopButtonClick();
      startX = e.clientX;
      startY = e.clientY;
      const attachEvent = carouselContainerRef.current;
      attachEvent.addEventListener("mousemove", handleMouseMove);
      attachEvent.addEventListener("mouseup", handleMouseUp);
      attachEvent.addEventListener("mouseleave", handleMouseUp);
    };
    const handleMouseMove = (e: any) => {
      endX = e.clientX - startX;
      endY = e.clientY - startY;
      if (showFadeEffect) return;
      handleMove();
      setAllowTransition(true);
    };
    const handleMouseUp = () => {
      setAllowTransition(false);
      handleTouchAndDragEnd();
      const attachEvent = carouselContainerRef.current;
      attachEvent.removeEventListener("mousemove", handleMouseMove);
      attachEvent.removeEventListener("mouseup", handleMouseUp);
      attachEvent.removeEventListener("mouseleave", handleMouseUp);
    };
    // Slide using touch
    const handleTouchStart = (e: any) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: any) => {
      endX = e.touches[0].clientX - startX;
      endY = e.touches[0].clientY - startY;
      if (showFadeEffect) return;
      handleMove();
    };
    // Sliding using mouse and touch
    const handleMove = () => {
      if (syncWith?.current?.currentIndex > 0) return;
      const translateOnMove = translateWidth - (isVerticalSlider ? endY : endX);
      carouselContainerRef.current.style.transform = isVerticalSlider
        ? `translate3d(0,${-translateOnMove}px,0)`
        : `translate3d(${-translateOnMove}px,0,0)`;
    };
    const handleTouchAndDragEnd = () => {
      const direction = isVerticalSlider ? endY < 0 : endX <= 0;
      const distance = Math.abs(isVerticalSlider ? endY : endX);
      if (distance > 70) {
        if (isEndless) {
          handleActiveSlide(direction ? "next" : "prev");
          if (syncWith)
            syncWith.current.handleUsingArrows(direction ? "next" : "prev");
        } else {
          if (direction) {
            if (
              activeIndex + Math.floor(numOfSlidesToShow) <=
              carouselChildren.length - 1
            ) {
              handleNextClick();
            } else {
              carouselContainerRef.current.style.transform = isVerticalSlider
                ? `translate3d(0,${-translateWidth}px,0)`
                : `translate3d(${-translateWidth}px,0,0)`;
            }
          } else if (!direction) {
            if (activeIndex !== 0) {
              handlePreviousClick();
            } else {
              carouselContainerRef.current.style.transform = `translate3d(${-translateWidth}px,0,0)`;
            }
          }
        }
      } else {
        carouselContainerRef.current.style.transform = isVerticalSlider
          ? `translate3d(0,${-translateWidth}px,0)`
          : `translate3d(${-translateWidth}px,0,0)`;
      }
      startX = 0;
      endX = 0;
      startY = 0;
      endY = 0;
    };
    // Rendering carousel items
    const renderCarouselItem = (
      child: React.ReactNode,
      index: number,
      slideIndex: number,
      isActive?: boolean
    ) => {
      return (
        <div
          key={index}
          slide-index={slideIndex}
          className={getClassNames({
            "inte-carousel__item-duplicate": true,
            "inte-carousel__item--active": isActive,
          })}
          style={generateSlideStyle(
            isVerticalSlider,
            slideWidth,
            spaceBetweenSlides,
            showFadeEffect
          )}
          aria-hidden={isActive ? "false" : "true"}
          tabIndex={-1}
          onClick={() => {
            if (slideToClickedSlide) {
              handleSlideByClickOnSlide(index, true);
              syncWith?.current?.handleByClick(index, true);
            }
          }}
        >
          {child}
        </div>
      );
    };

    const handleNextClick = () => {
      if (isSliding) return;
      stopButtonClick();
      if (syncWith) {
        if (isEndless) {
          handleActiveSlide("next");
          syncWith?.current?.handleUsingArrows("next");
        } else {
          if (
            activeIndex + syncWith.current.itemsToShow <=
            carouselChildren.length - 1
          ) {
            handleActiveSlide("next");
            syncWith.current.handleUsingArrows("next");
          } else {
            setCurrentIndex((currentIndex) => currentIndex + 1);
            handleActiveSlide("next");
          }
        }
      } else {
        handleActiveSlide("next");
      }
    };
    const handlePreviousClick = () => {
      if (isSliding) return;
      stopButtonClick();
      if (syncWith) {
        if (isEndless) {
          handleActiveSlide("prev");
          syncWith.current.handleUsingArrows("prev");
        } else {
          if (syncWith.current.index === activeIndex) {
            handleActiveSlide("prev");
            syncWith.current.handleUsingArrows("prev");
          } else {
            if (syncWith.current.currentIndex > 0) {
              setCurrentIndex((currentIndex) => currentIndex - 1);
              syncWith.current.handleUsingArrows("prev");
            } else {
              handleActiveSlide("prev");
            }
          }
        }
      } else {
        handleActiveSlide("prev");
      }
    };
    return (
      <div
        {...(staticId ? { id: "inte-carousel-" + staticId } : {})}
        className={getClassNames({
          "inte-carousel": true,
          [dotsAlign]: dotsAlign,
          [arrowAlign]: arrowAlign,
          [customClass]: customClass,
        })}
      >
        <div
          ref={carouselWrapperRef}
          className="inte-carousel__itemsWrapper"
          style={{
            padding: `0 ${stagePadding}px`,
          }}
        >
          <div
            className={getClassNames({
              "inte-carousel__itemsContainer": true,
              "inte-carousel__itemsContainer--vertical": isVerticalSlider,
            })}
            ref={carouselContainerRef}
            style={
              showFadeEffect
                ? fadeStyle
                : generateWrapperStyle(
                    isVerticalSlider,
                    wrapperHeight,
                    translateWidth,
                    allowTransition
                  )
            }
            onMouseEnter={() => {
              if (isAutoplay && pauseOnHover) handleMouseEnter();
            }}
            onMouseLeave={() => {
              if (isAutoplay && pauseOnHover) handleMouseLeave();
            }}
            onMouseDown={(e) => {
              slideUsingMouse && handleMouseDown(e);
            }}
            onTouchStart={(e) => {
              slideUsingTouch && handleTouchStart(e);
              if (isAutoplay && pauseOnHover) handleMouseEnter();
            }}
            onTouchMove={(e) => {
              slideUsingTouch && handleTouchMove(e);
            }}
            onTouchEnd={() => {
              slideUsingTouch && handleTouchAndDragEnd();
              if (isAutoplay && pauseOnHover) handleMouseLeave();
            }}
            onTouchCancel={() => {
              if (isAutoplay && pauseOnHover) handleMouseLeave();
            }}
          >
            {!showFadeEffect &&
              isEndless &&
              carouselChildren
                .slice(-numOfSlidesToShow)
                .map((child: React.ReactNode, index: number) => {
                  const slideIndex = -numOfSlidesToShow + index;
                  return renderCarouselItem(child, index, slideIndex);
                })}
            {carouselChildren.map((child: React.ReactNode, index: number) => {
              const isActive =
                index >= activeIndex && index < activeIndex + numOfSlidesToShow;
              return (
                <div
                  key={index}
                  slide-index={index}
                  className={getClassNames({
                    "inte-carousel__item": true,
                    "inte-carousel__item--current": index === activeIndex,
                    "inte-carousel__item--active": isActive,
                  })}
                  style={{
                    ...generateSlideStyle(
                      isVerticalSlider,
                      slideWidth,
                      spaceBetweenSlides,
                      showFadeEffect
                    ),
                    ...(showFadeEffect && {
                      position: index === activeIndex ? "relative" : "absolute",
                      opacity: index === activeIndex ? "1" : "0",
                      zIndex: index === activeIndex ? 1 : 0,
                      transition: "opacity 500ms ease 0s",
                    }),
                  }}
                  aria-hidden={isActive ? "false" : "true"}
                  tabIndex={-1}
                  onClick={() => {
                    if (slideToClickedSlide) {
                      handleSlideByClickOnSlide(index, false);
                      syncWith?.current?.handleByClick(index, false);
                    }
                  }}
                >
                  {child}
                </div>
              );
            })}
            {!showFadeEffect &&
              isEndless &&
              carouselChildren.map((child: React.ReactNode, index: number) => {
                const isActive =
                  index + carouselChildren.length >= activeIndex &&
                  index + carouselChildren.length <
                    activeIndex + numOfSlidesToShow;
                const slideIndex = index + carouselChildren.length;
                return renderCarouselItem(child, index, slideIndex, isActive);
              })}
          </div>
        </div>
        {hasDots && numOfSlidesToShow < carouselChildren.length && (
          <ul
            className="inte-carousel__dots"
            onMouseEnter={() => {
              if (isAutoplay && pauseOnDotsHover) handleMouseEnter();
            }}
            onMouseLeave={() => {
              if (isAutoplay && pauseOnDotsHover) handleMouseLeave();
            }}
          >
            {(isEndless || showFadeEffect
              ? carouselChildren
              : activeSlides
            ).map((_, index) => (
              <li
                key={index}
                className={getClassNames({
                  "inte-carousel__dots--active": activeIndex === index,
                })}
              >
                <button
                  onClick={() => {
                    handleSlideUsingDots(index);
                    if (syncWith) syncWith.current.handleUsingDots(index);
                  }}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
        {hasArrows && numOfSlidesToShow < carouselChildren.length && (
          <div className="inte-carousel__previousNextArrow">
            <button
              type="button"
              className={getClassNames({
                "inte-carousel__prev": true,
                "inte-carousel__prev--disabled":
                  !isEndless && activeIndex === 0,
              })}
              onClick={() => handlePreviousClick()}
              disabled={!isEndless && activeIndex === 0}
              aria-label="previous"
            >
              <ChevronLeft size="20" color="#1c2433" />
            </button>
            <button
              type="button"
              className={getClassNames({
                "inte-carousel__next": true,
                "inte-carousel__next--disabled":
                  activeIndex + Math.floor(numOfSlidesToShow) ===
                    carouselChildren.length && !isEndless,
              })}
              onClick={() => handleNextClick()}
              disabled={
                !!(
                  activeIndex + Math.floor(numOfSlidesToShow) ===
                    carouselChildren.length && !isEndless
                )
              }
              aria-label="next"
            >
              <ChevronRight size="20" color="#1c2433" />
            </button>
          </div>
        )}
      </div>
    );
  }
);
export default Carousel;
