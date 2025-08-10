import { IconsData } from "./IconData";
import  Card  from "../../Card/Card";
import React from "react";

export default {
    title: "Foundation/Icons",
    parameters: {
    },
    argTypes: {
        size: {
            description: "Font Size",
            control: {
                type: "text",
                options: ["24", "20", "16"],
            },
            defaultValue: "24",
        },
        color: {
            description: "Color Name",
            control: {
                type: "color",
            },
            defaultValue: "#1c2433",
        },
        strokeWidth: {
            description: "Stroke Width (2 suites best)",
            control: {
                type: "number",
            },
            defaultValue: "2",
        },
        customClass: {
            description: "Add custom class",
            control: {
                type: "text",
            },
            defaultValue: "",
        },
    },
};
const Template = ({ ...rest }: any) => {
    const icons: any = IconsData({ ...rest });
    return (
        <Card type={"Borderd"}>
            <div className="inte-icons__wrapper">
                <div>
                    {icons.map((item: any, index: number) => {
                        return <>
                            <div>
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </Card>
    );
};
export const Primary: any = Template.bind({});
