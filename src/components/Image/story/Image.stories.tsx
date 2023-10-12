import React, { useEffect, useState } from "react";
import { Card, FlexChild, FlexLayout, Text } from "../..";
import { Info, Star } from "../../../icons";
import Image from "../Image";

export default {
  title: "Components/Media/Image",
  component: Image,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=2390-226813&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    src: {
      description: "Input the source URL",
      control: {
        type: "text",
      },
      defaultValue: "https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE",
    },
    alt: {
      description:
        "In cases when images fail to load, the Image component will result into the native <img/> browser fallback.",
      control: {
        type: "text",
      },
      defaultValue: "Image Data Not Found",
    },
    onClick: {
      description: "Onclick function",
      control: {
        type: "function",
        disable: true,
      },
    },
    customClass: {
      description: "set customClass of  image component",
      control: {
        type: "text",
      },
    },
    height: {
      description: "Add height",
      control: {
        type: "number",
      },
      defaultValue: 300,
    },
    width: {
      description: "Add width",
      control: {
        type: "number",
      },
      defaultValue: 300,
    },
    objectFit: {
      description: "Set fill nature of image inside box",
      control: {
        type: "radio",
        options: ["fill", "contain", "cover", "none"],
      },
      defaultValue: "fill",
    },
    borderRadius: {
      description: "You can do border radius like 5px or 5%  or  5rem",
      control: {
        type: "text",
      },
      defaultValue: "10px",
    },
    name: {
      description: "Enter image name",
      control: {
        type: "text",
      },
      defaultValue: "This is a image component",
    },

    title: {
      description: "You can  add title on image",
      control: {
        type: "text",
      },
    },
    titleBar: {
      description: "You can  add title bar on image",
      control: {
        type: "text",
      },
    },
    fallback: {
      description: "Load failure fault-tolerant src",
      control: {
        type: "text",
      },
    },
    multipleSrc: {
      description: "MultipleSrc is an Array ",
      control: {
        type: "array",
      },
      defaultValue: [
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
        "https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE",
      ],
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <Image
        src={rest.src}
        multipleSrc={rest.multipleSrc}
        alt={rest.alt}
        height={rest.height}
        width={rest.width}
        borderRadius={rest.borderRadius}
        name={rest.name}
        onClick={(e) => console.log("Modal is open", e)}
        objectFit={rest.objectFit}
        title={rest.title}
        titleBar={rest.titleBar}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// image clickable
export const Clickable_Image: any = Template.bind({});
Clickable_Image.decorators = [
  () => (
    <Image
      src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
      alt="Image not found"
      width={300}
      height={200}
      onClick={(e) => alert(JSON.stringify(e))}
    />
  ),
];

//  image height and width
export const Height_and_width: any = Template.bind({});
Height_and_width.decorators = [
  () => (
    <Image
      src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
      width={400}
      height={400}
    />
  ),
];

//  Image Border Radius
export const Image_Border_Radius: any = Template.bind({});
Image_Border_Radius.decorators = [
  () => (
    <Card title="Image Border Radius">
      <FlexLayout
        desktopWidth="25"
        tabWidth="50"
        mobileWidth="50"
        spacing="loose"
      >
        <Image
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          width={250}
          height={250}
          borderRadius="20px"
        />
        <Image
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          width={250}
          height={250}
          borderRadius="40px"
        />

        <Image
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          width={250}
          height={250}
          borderRadius="100px"
        />

        <Image
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          width={250}
          height={250}
          borderRadius="50%"
        />
      </FlexLayout>
    </Card>
  ),
];

//  Image alt
export const Image_alt: any = Template.bind({});
Image_alt.decorators = [
  () => (
    <Image
      src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
      width={250}
      height={250}
      alt="Image not found or error 404"
    />
  ),
];

//  Image_Zoom
export const Image_Zoom: any = Template.bind({});
Image_Zoom.decorators = [
  () => (
    <Image
      src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
      width={250}
      height={250}
      alt="Image not found or error 404"
    />
  ),
];

//  Multiple_Image_Zoom
export const Multiple_Image_Zoom: any = Template.bind({});
Multiple_Image_Zoom.decorators = [
  () => {
    const dataSrcs = [
      "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
    ];

    return (
      <>
        <Image
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          multipleSrc={dataSrcs}
          width={250}
          height={250}
          alt="Image not found or error 404"
        />
      </>
    );
  },
];

//  Image with Title
export const Image_with_title: any = Template.bind({});
Image_with_title.decorators = [
  () => (
    <Image
      src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
      width={250}
      height={250}
      title={
        <FlexLayout valign="center">
          <Star size="20" color="#fff" />
          <p style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
            Image Title
          </p>
        </FlexLayout>
      }
      alt="Image not found or error 404"
    />
  ),
];

// Image_With_Title_Bar
export const Image_With_Title_Bar: any = Template.bind({});
Image_With_Title_Bar.decorators = [
  () => (
    <Image
      src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=248&fit=crop&auto=format"
      width={250}
      height={250}
      titleBar={
        <FlexLayout valign="center" halign="fill">
          <>
            <p style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
              Image Name...
            </p>
            <p style={{ color: "#fff", fontSize: "12px" }}>By:- @cedcoss</p>
          </>
          <Info size="24" color="#fff" />
        </FlexLayout>
      }
      alt="Image not found or error 404"
    />
  ),
];

// Image Title and Title_Bar
export const Image_Title_And_Title_Bar: any = Template.bind({});
Image_Title_And_Title_Bar.decorators = [
  () => (
    <Image
      src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=248&fit=crop&auto=format"
      width={250}
      height={250}
      title={
        <FlexLayout valign="center">
          <Star size="20" color="#fff" />
          <p style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
            Image Title
          </p>
        </FlexLayout>
      }
      titleBar={
        <FlexLayout valign="center" halign="fill">
          <>
            <p style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}>
              Image Name...
            </p>
            <p style={{ color: "#fff", fontSize: "12px" }}>By:- @cedcoss</p>
          </>
          <Info size="24" color="#fff" />
        </FlexLayout>
      }
      alt="Image not found or error 404"
    />
  ),
];

// Image List
export const Image_List: any = Template.bind({});
Image_List.decorators = [
  () => (
    <Card>
      <FlexLayout>
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <>
            <FlexLayout childWidth="fullWidth">
              <Image
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                height={250}
              />
              <Image
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
                height={250}
              />
            </FlexLayout>
            <Image
              src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
              height={303}
              alt="Image not found or error 404"
            />
          </>
        </FlexChild>
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <>
            <Image
              height={250}
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"
            />
            <FlexLayout childWidth="fullWidth">
              <Image
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                height={150}
              />
              <Image
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
                height={150}
              />
            </FlexLayout>
            <Image
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format"
              height={150}
              alt="Image not found or error 404"
            />
          </>
        </FlexChild>
      </FlexLayout>
    </Card>
  ),
];

// Image_List_With_Title
export const Image_List_With_Title: any = Template.bind({});
Image_List_With_Title.decorators = [
  () => (
    <Card>
      <FlexLayout>
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <>
            <FlexLayout childWidth="fullWidth">
              <Image
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                height={250}
                title={
                  <FlexLayout valign="center">
                    <Star size="20" color="#fff" />
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Image Title
                    </p>
                  </FlexLayout>
                }
              />
              <Image
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
                height={250}
                title={
                  <FlexLayout valign="center">
                    <Star size="20" color="#fff" />
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Image Title
                    </p>
                  </FlexLayout>
                }
              />
            </FlexLayout>
            <Image
              src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
              height={303}
              title={
                <FlexLayout valign="center" halign="fill">
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Image Title
                  </p>
                  <Star size="20" color="#fff" />
                </FlexLayout>
              }
            />
          </>
        </FlexChild>
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <>
            <Image
              height={250}
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"
              title={
                <FlexLayout valign="center">
                  <Star size="20" color="#fff" />
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Image Title
                  </p>
                </FlexLayout>
              }
            />
            <FlexLayout childWidth="fullWidth">
              <Image
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                height={150}
                title={
                  <FlexLayout valign="center">
                    <Star size="20" color="#fff" />
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Image Title
                    </p>
                  </FlexLayout>
                }
              />
              <Image
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
                height={150}
                title={
                  <FlexLayout valign="center">
                    <Star size="20" color="#fff" />
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Image Title
                    </p>
                  </FlexLayout>
                }
              />
            </FlexLayout>
            <Image
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format"
              height={150}
              title={
                <FlexLayout valign="center">
                  <Star size="20" color="#fff" />
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Image Title
                  </p>
                </FlexLayout>
              }
            />
          </>
        </FlexChild>
      </FlexLayout>
    </Card>
  ),
];

// Image_List_With_Title_Bar
export const Image_List_With_Title_Bar: any = Template.bind({});
Image_List_With_Title_Bar.decorators = [
  () => (
    <Card>
      <FlexLayout>
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <>
            <FlexLayout childWidth="fullWidth">
              <Image
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                height={250}
                titleBar={
                  <FlexLayout valign="center" halign="fill">
                    <>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Image Name...
                      </p>
                      <p style={{ color: "#fff", fontSize: "12px" }}>
                        By:- @cedcoss
                      </p>
                    </>
                    <Info size="24" color="#fff" />
                  </FlexLayout>
                }
              />
              <Image
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
                height={250}
                titleBar={
                  <FlexLayout valign="center" halign="fill">
                    <>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Image Name...
                      </p>
                      <p style={{ color: "#fff", fontSize: "12px" }}>
                        By:- @cedcoss
                      </p>
                    </>
                    <Info size="24" color="#fff" />
                  </FlexLayout>
                }
              />
            </FlexLayout>
            <Image
              src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
              height={303}
              alt="Image not found or error 404"
              titleBar={
                <FlexLayout valign="center" halign="fill">
                  <>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Image Name...
                    </p>
                    <p style={{ color: "#fff", fontSize: "12px" }}>
                      @Image Name ...
                    </p>
                  </>
                  <Info size="24" color="#fff" />
                </FlexLayout>
              }
            />
          </>
        </FlexChild>
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <>
            <Image
              height={250}
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"
              titleBar={
                <FlexLayout valign="center" halign="fill">
                  <>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Image Name...
                    </p>
                    <p style={{ color: "#fff", fontSize: "12px" }}>
                      @Image Name ...
                    </p>
                  </>
                  <Info size="24" color="#fff" />
                </FlexLayout>
              }
            />
            <FlexLayout childWidth="fullWidth">
              <Image
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                height={150}
                titleBar={
                  <FlexLayout valign="center" halign="fill">
                    <>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Image Name...
                      </p>
                      <p style={{ color: "#fff", fontSize: "12px" }}>
                        By:- @cedcoss
                      </p>
                    </>
                    <Info size="24" color="#fff" />
                  </FlexLayout>
                }
              />
              <Image
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format"
                height={150}
                titleBar={
                  <FlexLayout valign="center" halign="fill">
                    <>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Image Name...
                      </p>
                      <p style={{ color: "#fff", fontSize: "12px" }}>
                        By:- @cedcoss
                      </p>
                    </>
                    <Info size="24" color="#fff" />
                  </FlexLayout>
                }
              />
            </FlexLayout>
            <Image
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format"
              height={150}
              alt="Image not found or error 404"
              titleBar={
                <FlexLayout valign="center" halign="fill">
                  <>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Image Name...
                    </p>
                    <p style={{ color: "#fff", fontSize: "12px" }}>
                      @Image Name ...
                    </p>
                  </>
                  <Info size="24" color="#fff" />
                </FlexLayout>
              }
            />
          </>
        </FlexChild>
      </FlexLayout>
    </Card>
  ),
];

// Title_Below_Image
export const Title_Below_Image: any = Template.bind({});
Title_Below_Image.decorators = [
  () => {
    const [storeData, setStoreData] = useState([]);
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          setStoreData(json.products);
        });
    }, []);
    return (
      <Card>
        <FlexLayout
          desktopWidth="33"
          tabWidth="33"
          mobileWidth="50"
          spacing="loose"
        >
          {storeData?.map((item: any) => {
            return item.images.map((url: any) => {
              return (
                <FlexLayout direction="vertical">
                  <Image src={url} height={300} />
                  <FlexLayout valign="center" halign="fill">
                    <>
                      <Text type="T-7" fontweight="bold">
                        {item.title}
                      </Text>
                      <Text>{item.brand}</Text>
                    </>
                    <Info size="20" color="#000" />
                  </FlexLayout>
                </FlexLayout>
              );
            });
          })}
        </FlexLayout>
      </Card>
    );
  },
];

//  Multiple_Image_Zoom
export const Multiple_Images: any = Template.bind({});
Multiple_Images.decorators = [
  () => {
    const [storeData, setStoreData] = useState([]);

    useEffect(() => {
      let hold: any = [];
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          json.products.map((item: any) => {
            return hold.push(item.images);
          });
          setStoreData(hold);
        });
    }, []);

    return (
      <>
        <Image
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          multipleSrc={storeData.flat() ?? 0}
          width={250}
          height={250}
          alt="Image not found or error 404"
        />
      </>
    );
  },
];
