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
      description: "The source URL of the image.",
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
    onClose: {
      description:
        "onClose function is working when image is open modal format",
      control: {
        type: "function",
        disable: true,
      },
    },
    onLoad: {
      description:
        "A callback function that is called when the image has successfully loaded",
      control: {
        type: "function",
        disable: true,
      },
    },
    onError: {
      description:
        "A callback function that is called if the image fails to load.",
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
      description: "Add custom image  height",
      control: {
        type: "number",
      },
      defaultValue: 300,
    },
    width: {
      description: "Add custom image width",
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
    multipleImage: {
      // description: "multipleImage is an array of object",
      description: `<div><strong>multipleImage is an array of object:-</strong></div><table bgcolor="#f5f5f5"><tbody><tr><td><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>src<span style="color:red">*</span></td><td>string</td></tr><tr><td>alt</td><td>string</td></tr><tr><td>fallback</td><td>string</td></tr><tr><td>onClick</td><td>function</td></tr><tr><td>onLoad</td><td>function</td></tr><tr><td>onError</td><td>function</td></tr></tbody></table></td></tr></tbody></table>`,
      control: {
        type: "array",
      },
      defaultValue: [
        {
          src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        },
        {
          src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          src: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
        },
      ],
    },
    isOpen: {
      description:
        "isOpen is a boolean type , this prop is working when present multipleImage",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    preview: {
      description:
        "preview is a boolean type , this prop is working when preview is true then clickable and showing image modal",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    previewIcon: {
      description: "You can change Preview Icon",
      control: {
        type: false,
      },
    },
    previewText: {
      description: "You can change Preview Text",
      control: {
        type: "text",
      },
      defaultValue: "Preview",
    },
  },
};

const Template = ({ ...rest }) => {
  const [showAllImg, setShowAllImg] = useState(rest.isOpen);
  return (
    <Card>
      <Image
        src={rest.src}
        multipleImage={rest.multipleImage}
        alt={rest.alt}
        isOpen={showAllImg}
        preview={rest.preview}
        height={rest.height}
        width={rest.width}
        borderRadius={rest.borderRadius}
        onClick={() => setShowAllImg(true)}
        onClose={() => setShowAllImg(false)}
        objectFit={rest.objectFit}
        title={rest.title}
        titleBar={rest.titleBar}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

//  image height and width
export const Image_Height_and_width: any = Template.bind({});
Image_Height_and_width.decorators = [
  () => (
    <Card title="Iamge height and width (400px X 400px)">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbGl6F4yiUwbvYnfIgQ90UGysLVu480Zs5Q&usqp=CAU"
        width={400}
        height={400}
      />
    </Card>
  ),
];

// image clickable
export const Clickable_Image: any = Template.bind({});
Clickable_Image.decorators = [
  () => (
    <Card title="Clickable Image">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OVPM7-b1z_7GG3YQGOoUhNkBJyNolFrAvw&usqp=CAU"
        alt="Image not found"
        width={300}
        height={300}
        onClick={() => alert("clicked")}
      />
    </Card>
  ),
];

// image clickable
export const Image_WithOut_Clickable_Image: any = Template.bind({});
Image_WithOut_Clickable_Image.decorators = [
  () => (
    <Card title="Image without clickable image">
      <Image
        src="data:image/jpeg;base64,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"
        alt="Image not found"
        width={300}
        height={300}
      />
    </Card>
  ),
];

//  Image Border Radius
export const Image_Border_Radius: any = Template.bind({});
Image_Border_Radius.decorators = [
  () => (
    <Card title="Image Border Radius">
      <Image
        src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
        width={200}
        height={200}
        borderRadius="20px"
      />
      <Image
        src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
        width={200}
        height={200}
        borderRadius="40px"
      />

      <Image
        src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
        width={200}
        height={200}
        borderRadius="100px"
      />

      <Image
        src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
        width={200}
        height={200}
        borderRadius="50%"
      />
    </Card>
  ),
];

//  Image with Title
export const Image_with_title: any = Template.bind({});
Image_with_title.decorators = [
  () => (
    <Card title="Image with title">
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
    </Card>
  ),
];

// Image_With_Title_Bar
export const Image_With_Title_Bar: any = Template.bind({});
Image_With_Title_Bar.decorators = [
  () => (
    <Card title="Image with title bar">
      <Image
        src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=248&fit=crop&auto=format"
        width={250}
        height={250}
        titleBar={
          <FlexLayout valign="center" halign="fill">
            <>
              <p
                style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}
              >
                Image Name...
              </p>
              <p style={{ color: "#fff", fontSize: "12px" }}>By:- @cedcoss</p>
            </>
            <Info size="24" color="#fff" />
          </FlexLayout>
        }
        alt="Image not found or error 404"
      />
    </Card>
  ),
];

// Image_With_Title_Bar
export const Image_With_Title_Bar_With_Clickable: any = Template.bind({});
Image_With_Title_Bar_With_Clickable.decorators = [
  () => (
    <Card title="Image with title bar">
      <Image
        src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=248&fit=crop&auto=format"
        width={250}
        height={250}
        onClick={() => alert("clicked")}
        titleBar={
          <FlexLayout valign="center" halign="fill">
            <>
              <p
                style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}
              >
                Image Name...
              </p>
              <p style={{ color: "#fff", fontSize: "12px" }}>By:- @cedcoss</p>
            </>
            <Info size="24" color="#fff" />
          </FlexLayout>
        }
        alt="Image not found or error 404"
      />
    </Card>
  ),
];

// Image Title and Title_Bar
export const Image_Title_With_Title_Bar: any = Template.bind({});
Image_Title_With_Title_Bar.decorators = [
  () => (
    <Card title="Image title with title bar">
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
              <p
                style={{ color: "#fff", fontSize: "16px", fontWeight: "bold" }}
              >
                Image Name...
              </p>
              <p style={{ color: "#fff", fontSize: "12px" }}>By:- @cedcoss</p>
            </>
            <Info size="24" color="#fff" />
          </FlexLayout>
        }
        alt="Image not found or error 404"
      />
    </Card>
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
export const Multiple_Images_With_Scroll: any = Template.bind({});
Multiple_Images_With_Scroll.decorators = [
  () => {
    const [storeData, setStoreData] = useState([]);
    const [showAllImg, setShowAllImg] = useState(false);

    useEffect(() => {
      let hold: any = [];
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          json.products.map((item: any) => {
            return hold.push({
              src: item.thumbnail,
            });
          });
          setStoreData(hold);
        });
    }, []);

    return (
      <Card title="Multiple Images With Scroll">
        <Image
          isOpen={showAllImg}
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          multipleImage={storeData}
          width={250}
          height={250}
          onClose={() => setShowAllImg(false)}
          onClick={() => setShowAllImg(!showAllImg)}
          preview
          alt="Image not found or error 404"
        />
      </Card>
    );
  },
];
