import React, { useRef } from "react";
import Carousel from "../Carousel";
import { Card } from "../../Card";
import img1 from "../assests/Rectangle1.png";
import img2 from "../assests/Rectangle2.png";
import img3 from "../assests/Rectangle3.png";
import img4 from "../assests/Rectangle4.png";
import img5 from "../assests/Rectangle5.png";
import { FlexLayout } from "../../FlexLayout";
export default {
  title: "Components/Behaviour/Carousel",
  component: Carousel,
  argTypes: {
    children: {
      description:
        "Pass inside the children what you want to see inside the carousel",
      control: {
        disable: true,
      },
    },
    slidesToShow: {
      description: "set how much slide you want to show",
      control: {
        type: "number",
      },
      defaultValue: 3,
    },
    isEndless: {
      description: "slide to infinite",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    isAutoplay: {
      description: "Want to autoplay the slides",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isVerticalSlider: {
      description: "Set direction of slider vertical",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    showDots: {
      description: "Want dots",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    showArrows: {
      description: "Want arrows",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    slideUsingMouse: {
      description: "Drag Using Mouse",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    persistSlideOnRefresh: {
      description:
        "When you refresh the page, the initial slide appears, but when this prop is set to true and you refresh the page, you will stay on the same slide",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    staticId: {
      description:
        "This prop is required only when you provide persistSlideOnRefresh prop as true and it is useful when you refresh the page then slide will not change .<br/> Note: static id must be provide when you are passing persistSlideOnRefresh prop as true ",
      control: {
        type: "text",
      },
      defaultValue: "1",
    },
    slideUsingTouch: {
      description: "Drag Using Touch",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    autoplaySpeed: {
      description: "set timeout of autoplay",
      control: {
        type: "number",
      },
      defaultValue: 1000,
    },
    slideToClickedSlide: {
      description: "Slide to the clicked slide",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    showFadeEffect: {
      description:
        "show Fade effect animation (In this case only one item will be shown)",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    pauseOnHover: {
      description: "Pause on hover the slide while autoplay is true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    pauseOnDotsHover: {
      description: "Pause on hover the dots while autoplay is true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    stagePadding: {
      description:
        "Provide the stagepadding in number (it will be applied in PX ) , if you want some part of the carousel to be visible at both side",
      control: {
        type: "number",
      },
      defaultValue: 50,
    },
    ref: {
      description:
        "Provide ref when you want to sync two carousel. <br/> Also provide the syncWith prop with ref prop , <br/> Note: Ref and syncWith props both are mandatory to sync carousel",
      control: {
        disable: true,
      },
    },
    syncWith: {
      description:
        "Provide this prop when you want to sync two carousel. <br/> Also provide the ref prop with syncWith prop , <br/> Note: Ref and syncWith props both are mandatory to sync carousel",
      control: {
        disable: true,
      },
    },
    breakpoints: {
      description:
        "Provide breakpoints and make carousel responsive according to your need",
      control: {
        type: "object",
      },
      defaultValue: {
        1024: {
          slidesToShow: 5,
          showDots: true,
          showArrows: true,
        },
        880: {
          slidesToShow: 4,
          showDots: true,
          showArrows: true,
        },
        768: {
          slidesToShow: 3,
          showDots: true,
          showArrows: true,
        },
        640: {
          slidesToShow: 2,
          showDots: true,
          showArrows: true,
        },
        370: {
          slidesToShow: 1,
          showDots: true,
          showArrows: true,
        },
      },
    },
    spaceBetweenSlides: {
      description: "Space between the two slides (in PX only)",
      control: {
        type: "number",
      },
      defaultValue: 0,
    },
    beforeSlideChange: {
      description:
        "Get index change callback function before slideChange (as soon as you slides the slide using next-previous button or by sliding)",
      control: {
        type: "function",
        disabled: true,
      },
    },
    afterSlideChange: {
      description: "Get index change callback function after slideChange",
      control: {
        type: "function",
        disabled: true,
      },
    },
    dotsPosition: {
      description: " Dots Alignment",
      control: {
        type: "radio",
        options: [
          "bottomLeft",
          "bottomRight",
          "bottomCenter",
          "topLeft",
          "topRight",
          "topCenter",
        ],
      },
      defaultValue: "bottomCenter",
    },
    arrowPosition: {
      description: "Arrow alignment",
      control: {
        type: "radio",
        options: [
          "bottomCenter",
          "bottomRight",
          "bottomLeft",
          "topLeft",
          "topRight",
          "topCenter",
          "horizontalCenter",
        ],
      },
      defaultValue: "bottomCenter",
    },
    customClass: {
      description: "Add desired custom class for adding your custom css",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const slideImg = [img1, img2, img3, img4, img5, img3, img4, img5];

const colorCode = [
  "#E6563E",
  "#24282F",
  "#0689D5",
  "#616C87",
  "#AAA542",
  "#46B578",
  "#6AA7D9",
  "#45B2AC",
];

const renderSlidesWithImg = () =>
  [1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
    <Card key={index} cardType="bordered" media={slideImg[index]}>
      <h3>Slide {num}</h3>
    </Card>
  ));

const renderSlidesWithoutImages = () =>
  [1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
    <div
      key={index}
      style={{
        backgroundColor: colorCode[index],
        border: "1px solid black",
        height: "200px",
        padding: "10px",
      }}
    >
      <h3 style={{ color: "var(--inte-G1000)", fontSize: "2rem" }}>
        Slide {num}
      </h3>
    </div>
  ));

const renderSlidesWithoutHeight = () =>
  [1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
    <div
      key={index}
      style={{
        backgroundColor: colorCode[index],
        height: "100%",
        padding: "15px",
      }}
    >
      <div style={{ color: "var(--inte-G1000)", fontSize: "2rem" }}>
        Slide {num}
      </div>
    </div>
  ));

const Template = ({ ...rest }) => {
  return (
    <Card title={"Ounce Carousel"}>
      <Carousel
        slidesToShow={rest.slidesToShow}
        isEndless={rest.isEndless}
        isAutoplay={rest.isAutoplay}
        autoplaySpeed={rest.autoplaySpeed}
        showDots={rest.showDots}
        showArrows={rest.showArrows}
        slideToClickedSlide={rest.slideToClickedSlide}
        spaceBetweenSlides={rest.spaceBetweenSlides}
        showFadeEffect={rest.showFadeEffect}
        slideUsingMouse={rest.slideUsingMouse}
        slideUsingTouch={rest.slideUsingTouch}
        isVerticalSlider={rest.isVerticalSlider}
        dotsPosition={rest.dotsPosition}
        arrowPosition={rest.arrowPosition}
        beforeSlideChange={rest.beforeSlideChange}
        afterSlideChange={rest.afterSlideChange}
        pauseOnHover={rest.pauseOnHover}
        pauseOnDotsHover={rest.pauseOnDotsHover}
        persistSlideOnRefresh={rest.persistSlideOnRefresh}
        customClass={rest.customClass}
      >
        {renderSlidesWithImg()}
      </Carousel>
    </Card>
  );
};
export const Primary = Template.bind({});
//Simple Carousel
export const SimpleCarousel: any = Template.bind({});
SimpleCarousel.decorators = [
  () => {
    return (
      <Card>
        <Carousel slidesToShow={2} isEndless={false} showArrows showDots>
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Space between two slides
export const CarouselWithSpaceBetweenSlides: any = Template.bind({});
CarouselWithSpaceBetweenSlides.decorators = [
  () => {
    return (
      <Card title="Carousel with Space between two slides">
        <Carousel
          slidesToShow={3}
          spaceBetweenSlides={20}
          isEndless={false}
          slideToClickedSlide={false}
        >
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Fade
export const CarouselWithFadeEffect: any = Template.bind({});
CarouselWithFadeEffect.decorators = [
  () => {
    return (
      <Card title="Carousel With Fade Effect">
        <Carousel isEndless={false} showFadeEffect={true}>
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Carousel with one and half slide
export const CarouselWithOneAndHalfSlide: any = Template.bind({});
CarouselWithOneAndHalfSlide.decorators = [
  () => {
    return (
      <Card title="Carousel with one and half slide">
        <Carousel slidesToShow={1.3} spaceBetweenSlides={12}>
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Center padding
export const CarouselWithStagePadding: any = Template.bind({});
CarouselWithStagePadding.decorators = [
  () => {
    return (
      <Card title="Carousel with stage padding">
        <Carousel slidesToShow={1} stagePadding={100} spaceBetweenSlides={8}>
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Vertical Slider
export const VerticalSlider: any = Template.bind({});
VerticalSlider.decorators = [
  () => {
    return (
      <Card title="Vertical Slider">
        <Carousel slidesToShow={3} isEndless={true} isVerticalSlider>
          {renderSlidesWithoutHeight()}
        </Carousel>
      </Card>
    );
  },
];
// Responsive carousel
export const ResponsiveCarousel: any = Template.bind({});
ResponsiveCarousel.decorators = [
  () => {
    return (
      <Card title="Responsive carousel">
        <Carousel
          slidesToShow={5}
          isEndless={false}
          breakpoints={{
            1024: {
              slidesToShow: 5,
              showDots: true,
              showArrows: true,
            },
            880: {
              slidesToShow: 4,
              showDots: true,
              showArrows: true,
            },
            768: {
              slidesToShow: 3,
              showDots: true,
              showArrows: true,
            },
            640: {
              slidesToShow: 2,
              showDots: true,
              showArrows: true,
            },
            370: {
              slidesToShow: 1,
              showDots: true,
              showArrows: true,
            },
          }}
        >
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Carousel Sync
export const CarouselSync: any = Template.bind({});
CarouselSync.decorators = [
  () => {
    const ref1: any = useRef(null);
    const ref2: any = useRef(null);
    return (
      <Card title="Sync Carousel">
        <FlexLayout
          direction="vertical"
          desktopWidth="100"
          tabWidth="100"
          mobileWidth="100"
        >
          <Carousel
            ref={ref1}
            syncWith={ref2}
            slidesToShow={1}
            isEndless={false}
            showDots={false}
            showArrows={false}
          >
            {renderSlidesWithoutImages()}
          </Carousel>
          <Carousel
            ref={ref2}
            syncWith={ref1}
            slidesToShow={3}
            isEndless={false}
            showDots={true}
            showArrows={true}
            slideToClickedSlide
          >
            {renderSlidesWithoutImages()}
          </Carousel>
        </FlexLayout>
      </Card>
    );
  },
];
// Carousel_with_dots
export const Carousel_with_dots: any = Template.bind({});
Carousel_with_dots.decorators = [
  () => {
    return (
      <>
        <FlexLayout
          spacing="extraLoose"
          desktopWidth="33"
          tabWidth="33"
          mobileWidth="33"
        >
          <Card title="Dots Top Left">
            <Carousel
              showArrows={false}
              showDots
              dotsPosition="topLeft"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Dots Top Center">
            <Carousel
              showArrows={false}
              showDots
              dotsPosition="topCenter"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Dots Top Right">
            <Carousel
              showArrows={false}
              showDots
              dotsPosition="topRight"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
        </FlexLayout>
        <FlexLayout
          spacing="extraLoose"
          desktopWidth="33"
          tabWidth="33"
          mobileWidth="33"
        >
          <Card title="Dots Bottom Left">
            <Carousel
              showArrows={false}
              showDots
              dotsPosition="bottomLeft"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Dots Bottom Center">
            <Carousel showArrows={false} showDots slidesToShow={1}>
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Dots Bottom Right">
            <Carousel
              showArrows={false}
              showDots
              dotsPosition="bottomRight"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
        </FlexLayout>
      </>
    );
  },
];
// Carousel_with_Arrow
export const Carousel_with_arrow: any = Template.bind({});
Carousel_with_arrow.decorators = [
  () => {
    return (
      <>
        <FlexLayout
          spacing="extraLoose"
          desktopWidth="33"
          tabWidth="33"
          mobileWidth="33"
        >
          <Card title="Arrow Top Left">
            <Carousel
              showArrows={true}
              showDots={false}
              arrowPosition="topLeft"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Top Center">
            <Carousel
              showArrows={true}
              showDots={false}
              arrowPosition="topCenter"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Top Right">
            <Carousel
              showArrows={true}
              showDots={false}
              arrowPosition="topRight"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
        </FlexLayout>
        <FlexLayout
          spacing="extraLoose"
          desktopWidth="33"
          tabWidth="33"
          mobileWidth="33"
        >
          <Card title="Arrow Bottom Left">
            <Carousel
              showArrows={true}
              showDots={false}
              arrowPosition="bottomLeft"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Bottom Center">
            <Carousel
              showArrows={true}
              showDots={false}
              arrowPosition="bottomCenter"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Bottom Right">
            <Carousel
              showArrows={true}
              showDots={false}
              arrowPosition="bottomRight"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
        </FlexLayout>
      </>
    );
  },
];
// Carousel with arrow and dots
export const Carousel_with_arrow_and_dots: any = Template.bind({});
Carousel_with_arrow_and_dots.decorators = [
  () => {
    return (
      <>
        <FlexLayout
          spacing="extraLoose"
          desktopWidth="33"
          tabWidth="33"
          mobileWidth="33"
        >
          <Card title="Arrow Top Left">
            <Carousel
              showArrows={true}
              showDots={true}
              dotsPosition="topLeft"
              arrowPosition="topLeft"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Top Center">
            <Carousel
              showArrows={true}
              showDots={true}
              dotsPosition="topCenter"
              arrowPosition="topCenter"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Top Right">
            <Carousel
              showArrows={true}
              showDots={true}
              dotsPosition="topRight"
              arrowPosition="topRight"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
        </FlexLayout>
        <FlexLayout
          spacing="extraLoose"
          desktopWidth="33"
          tabWidth="33"
          mobileWidth="33"
        >
          <Card title="Arrow Bottom Left">
            <Carousel
              showArrows={true}
              showDots={true}
              dotsPosition="bottomLeft"
              arrowPosition="bottomLeft"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Bottom Center">
            <Carousel
              showArrows={true}
              showDots={true}
              dotsPosition="bottomCenter"
              arrowPosition="bottomCenter"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
          <Card title="Arrow Bottom Right">
            <Carousel
              showArrows={true}
              showDots={true}
              dotsPosition="bottomRight"
              arrowPosition="bottomRight"
              slidesToShow={1}
            >
              {renderSlidesWithoutImages()}
            </Carousel>
          </Card>
        </FlexLayout>
      </>
    );
  },
];
// With before change and after change function
export const CarouselWithBeforeChangeAndAfterChangeFunction: any =
  Template.bind({});
CarouselWithBeforeChangeAndAfterChangeFunction.decorators = [
  () => {
    return (
      <Card>
        <Carousel
          slidesToShow={3}
          isEndless={true}
          beforeSlideChange={(currentSlide: number, nextSlide: number) =>
            console.log("before", currentSlide, nextSlide)
          }
          afterSlideChange={(currentSlide: number) =>
            console.log("after", currentSlide)
          }
        >
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Pause on hover
export const CarouselWithPauseOnHover: any = Template.bind({});
CarouselWithPauseOnHover.decorators = [
  () => {
    return (
      <Card title="Carousel with pause on hover">
        <Carousel
          slidesToShow={3}
          isEndless={true}
          isAutoplay
          pauseOnDotsHover
          pauseOnHover
        >
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
// Persist slide on refresh
export const CarouselWithPersistSlideOnRefresh: any = Template.bind({});
CarouselWithPersistSlideOnRefresh.decorators = [
  () => {
    return (
      <Card title="Carousel with Persist slide on Refresh">
        <Carousel
          staticId="1"
          slidesToShow={3}
          isEndless={true}
          persistSlideOnRefresh={true}
        >
          {renderSlidesWithoutImages()}
        </Carousel>
        <Carousel
          staticId="2"
          slidesToShow={2}
          isEndless={true}
          persistSlideOnRefresh={true}
        >
          {renderSlidesWithoutImages()}
        </Carousel>
      </Card>
    );
  },
];
