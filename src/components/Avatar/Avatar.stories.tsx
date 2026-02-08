import { Settings } from "react-feather";
import FlexLayout from "../FlexLayout/FlexLayout";
import Avatar from "./Avatar";
import Indicator from "../Indicator/Indicator";
import React from "react";
import InlineStack from "../InlineStack/InlineStack";

const size = ["Small", "Medium", "Large", "Xlarge"];
const shape = ["Circle", "Squire"];

export default {
    title: "Components/Avatar",
    component: Avatar,
    parameters: { docs: { autodocs: true, }, },
    argTypes: {
        size: {
            description: "Select Size",
            control: {
                type: "radio",
                options: size,
            },
            defaultValue: "Medium",
        },
        shape: {
            description: "Select shape",
            control: {
                type: "radio",
                options: shape,
            },
            defaultValue: "Positive",
        },
        icon: {
            description: "Send icon",
            control: {
                type: "",
            },
            defaultValue: "",
        },
        srcIco: {
            description: "send src as image",
            control: {
                type: "text",

            },
            defaultValue: "Positive",
        },

        label: {
            description: "Type the text label",
            control: {
                type: "text",
            },
            defaultValue: "Label",
        },
        indicator: {
            escription: "Send any badge in respect to status",
            control: {
                type: "",
            },
            defaultValue: "Label",
        }
    },
};
const Template = ({ ...rest }) => {
    return (
        <Avatar
            shape={rest.shape}
            icon={rest.icon}
            srcIco={rest.srcIco}
            label={rest.label}
            size={rest.size}
        />
    );
};

export const Primary = Template.bind({});

// Avatar with image icon
export const Avatar_with_image_icon: any = Template.bind({});
Avatar_with_image_icon.decorators = [
    () => {
        return (
            <InlineStack gap={2}>
                {shape.map((shapes: any, ind) => (
                    <Avatar
                        srcIco="https://t3.ftcdn.net/jpg/02/33/46/24/240_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
                        shape={shapes}
                        size={"Medium"}
                        label={"User"}
                    />
                ))}
            </InlineStack>
        );
    },
];

// Avatar with multiple sizes
export const Avatar_with_multiple_sizes: any = Template.bind({});
Avatar_with_multiple_sizes.decorators = [
    () => {
        return (
            <InlineStack gap={2}>
                {size.map((size: any, ind) => (
                    <Avatar
                        key={ind}
                        icon={<Settings />}
                        size={size}
                        label={"Users"}
                    />
                ))}
            </InlineStack>
        );
    },
];

// Avatar with multiple sizes using image
export const Avatar_with_multiple_sizes_using_image: any = Template.bind({});
Avatar_with_multiple_sizes_using_image.decorators = [
    () => {
        return (
            <InlineStack gap={2}>
                {size.map((size: any, ind) => (
                    <Avatar
                        key={ind}
                        icon={<Settings />}
                        srcIco="https://t3.ftcdn.net/jpg/02/33/46/24/240_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
                        size={size}
                        label={"Users"}
                    />
                ))}
            </InlineStack>
        );
    },
];

// Avatar with click action
export const Avatar_with_click_action: any = Template.bind({});
Avatar_with_click_action.decorators = [
    () => {
        return (

            <Avatar
                onClick={() => { alert('Avatar click') }}
                icon={<Settings />}
                srcIco="https://t3.ftcdn.net/jpg/02/33/46/24/240_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
                size={"Medium"}

                label={"Users"}
            />

        );
    },
];

// Avatar with indicator
export const Avatar_with_indicator: any = Template.bind({});
Avatar_with_indicator.decorators = [
    () => {
        return (
            <InlineStack gap={2}>
                {size.map((size: any, ind) => (
                    <Avatar
                        onClick={() => { alert('click with indicator') }}
                        indicator={<Indicator color="Notice" />}
                        key={ind}
                        icon={<Settings />}
                        // srcIco="https://t3.ftcdn.net/jpg/02/33/46/24/240_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
                        size={size}
                        label={"Users"}
                    />
                ))}
            </InlineStack>
        );
    },
];
