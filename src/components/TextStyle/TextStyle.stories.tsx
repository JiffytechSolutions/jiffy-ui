import React from "react";
import TextStyle from "./TextStyle";

const textColor = ['Dark', 'Secondary', 'Disabled', 'Primary', 'Possitve', 'Negative', 'Waiting', 'Invert']
export default {
    title: 'Components/TextStyle',
    component: TextStyle,
    tags: ["autodocs"],
    argTypes: {

        as: {
            description: "Select Element type",
            control: {
                type: "radio",
                options: ["dt", "dd", "h1", "h2", "h3", "h4", "h5", 'h6', 'p', 'span', 'strong', 'legend'],
            },
            defaultValue: "p"
        },
        type: {
            description: "Select Element type",
            control: {
                type: "radio",
                options: ["XsHeading", "SmHeading", "MdHeading", "LgHeading", "XlHeading", "2XlHeading", "LgBody", "SmBody", "MdBody", 'LgBody'],
            },
            defaultValue: "",
        },

        fontWeight: {
            description: "Select font weight",
            control: {
                type: "radio",
                options: ["Light", "Regular", "Medium", "Bold"],
            },
            defaultValue: "",
        },

        alignment: {
            description: "Manage alignment",
            control: {
                type: "radio",
                options: ["Start", "Center", "End", "Justify"],
            },
            defaultValue: "justify",
        },
        children: {
            description: "Select types",
            control: {
                type: "text",
            },
            defaultValue:
                "demo text 1 ",
        },
        textColor: {
            description: "Manage color of text",
            control: {
                type: "radio",
                options: textColor,
            },
            defaultValue: "",
        },
    }
};

const Template = ({ ...rest }) => {
    return (
        <>
            {/* <Card cardType="plain"> */}

            <TextStyle as={rest.as} textStyle={rest.textStyle} textDecoration={rest.textDecoration} type={rest.type} alignment={rest.alignment} textColor={rest.textColor} fontWeight={rest.fontWeight}>
                {rest.children}
            </TextStyle>
            {/* </Card> */}
        </>
    );
};

export const Default = Template.bind({});

// H1 Heading
export const H1Heading: any = Template.bind({});
H1Heading.decorators = [
    () => {
        return (
            <TextStyle as="h1" type="LgHeading" fontWeight="Medium" textColor="Dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </TextStyle>
        );
    },
];

// Text style with color variations 
export const TextStyleWithColorVariations: any = Template.bind({});
TextStyleWithColorVariations.decorators = [
    () => {
        return (
            <>

                {textColor.map((textcolor: any, index) => (
                    <TextStyle key={index} type="MdBody" as="p" fontWeight="Regular" textColor={textcolor} >
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </TextStyle>
                ))}

            </>
        );
    },
];

// H3 Heading
// export const h3_heading: any = Template.bind({});
// h3_heading.decorators = [
//     () => {
//         return (
//             <TextStyle type="heading_h3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//         );
//     },
// ];

// H4 Heading
// export const h4_heading: any = Template.bind({});
// h4_heading.decorators = [
//     () => {
//         return (
//             <TextStyle type="heading_h4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//         );
//     },
// ];

// H5 Heading
// export const h5_heading: any = Template.bind({});
// h5_heading.decorators = [
//     () => {
//         return (
//             <TextStyle type="heading_h5" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//         );
//     },
// ];

// H6 Heading
// export const h6_heading: any = Template.bind({});
// h6_heading.decorators = [
//     () => {
//         return (
//             <TextStyle type="heading_h6" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

//         );
//     },
// ];

// Paragraph text
// export const pragraph_text: any = Template.bind({});
// pragraph_text.decorators = [
//     () => {
//         return (
//             <TextStyle type="paragraph" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit aut sequi atque. Ipsa unde molestias dolorum commodi dicta voluptas amet facere repellat fugit, alias aut modi molestiae obcaecati optio." />
//         );
//     },
// ];

// All Types of heading and paragraph
// export const all_heading_para: any = Template.bind({});
// all_heading_para.decorators = [
//     () => {
//         return (<>
//             <TextStyle type="heading_h1" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//             <TextStyle type="heading_h2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//             <TextStyle type="heading_h3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//             <TextStyle type="heading_h4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//             <TextStyle type="heading_h5" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//             <TextStyle type="heading_h6" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//             <TextStyle type="paragraph" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit aut sequi atque. Ipsa unde molestias dolorum commodi dicta voluptas amet facere repellat fugit, alias aut modi molestiae obcaecati optio." />
//         </>
//         );
//     },
// ];