import React from "react";
import PageTitle from "./PageTitle";

export default {
    title: "components(Done)/PageTitle",
    component: PageTitle,
    tags: ["autodocs"],
    argTypes: {

    },
};

const primaryAction1 = {
    isLoading: false,
    label: "Proceed",
    isDisabled: false,
    onClick: () => {
        alert("Conngratulations You proceeded :)");
    },
};
const secondoryAction1 = {
    isLoading: false,
    label: "Cancel",
    onClick: () => {
        alert("Conngratulations You proceeded :)");
    },
};
const tertiaryAction1 = {
    isLoading: false,

    label: "Skip",
    onClick: () => {
        alert("Conngratulations You proceeded :)");
    },
};

const Template = ({ ...rest }) => {
    return (
        <PageTitle
            badge={
                {
                    children: "test",
                    color: "Positive",
                    size: "Medium",
                    emphasis: "Subtile",
                    type: "None"
                }
            }
            title={rest.title} description={rest.description} isReverseNavigation={rest.isReverseNavigation}
            primaryAction={
                primaryAction1
            }
            secondaryAction={
                secondoryAction1
            }
            tertiaryAction={
                tertiaryAction1
            }
        />
    );
};
export const Primary = Template.bind({});

export const PageTitleWithTitleOnly: any = Template.bind({});
PageTitleWithTitleOnly.decorators = [
    () => {
        return (
            <PageTitle title="Demo page title" description="" />
        );
    },
];

//Page Title with Title and description only 
export const PageTitleWithTitleAndDescriptionOnly: any = Template.bind({});
PageTitleWithTitleAndDescriptionOnly.decorators = [
    () => {
        return (
            <PageTitle title="Demo page title" description="Lorem ipsum is placeholder text commonly used in the graphic, print" />
        );
    },
];

//Page Title with Actions 
export const PageTitlewithActions: any = Template.bind({});
PageTitlewithActions.decorators = [
    () => {
        return (
            <PageTitle title="Demo page title"
                description="Lorem ipsum is placeholder text commonly used in the graphic, print"
                primaryAction={
                    primaryAction1
                }
                secondaryAction={secondoryAction1}
                tertiaryAction={tertiaryAction1} />
        );
    },
];

//Page Title with Actions 
export const PageTitleBackAction: any = Template.bind({});
PageTitleBackAction.decorators = [
    () => {
        return (
            <PageTitle title="Demo page title"
                description="Lorem ipsum is placeholder text commonly used in the graphic, print"
                primaryAction={
                    primaryAction1
                }
                secondaryAction={secondoryAction1}
                tertiaryAction={tertiaryAction1}
                isReverseNavigation
                onClick={() => alert('test')}
            />
        );
    },
];

//Page Title with Actions 
export const PageTitleWithBadge: any = Template.bind({});
PageTitleWithBadge.decorators = [
    () => {
        return (
            <PageTitle title="Demo page title"
                description="Lorem ipsum is placeholder text commonly used in the graphic, print"
                primaryAction={
                    primaryAction1
                }
                secondaryAction={secondoryAction1}
                tertiaryAction={tertiaryAction1}
                isReverseNavigation
                onClick={() => alert('test')}
                badge={
                    {
                        children: "Badge",
                        color: "Positive",
                        size: "Medium",
                        emphasis: "Subtile",
                        type: "None"
                    }
                }
            />
        );
    },
];