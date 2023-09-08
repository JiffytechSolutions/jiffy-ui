import React from 'react'
import { Button, FlexChild, FlexLayout, TextLink } from '../..'
import { Card } from '../../Card'
import { ThumbsDown, ThumbsUp } from '../../../storybook/Foundation/Icons/Icons'
import Announcement from '../Announcement'

export default {
    title: 'Components/Feedback/Announcement',
    component: Announcement,
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=5842-242181&t=4D7MxfpNKQKbShCl-0",
        },
    },
    argTypes: {
        title: {
            description: "Set Title ",
            control: {
                type: 'text',
            },
            defaultValue:
                "The product upload has been finished.",
        },
        desciption: {
            description: "Set the Description",
            control: {
                type: 'text',
            },
            defaultValue:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        date: {
            description: "This show the Date of the announecement ",
            control: {
                type: 'text',
            },
            defaultValue: 'Yesterday',
        },
        customClass: {
            description: "customClass for custom requirement ",
            control: {
                type: 'text',
            },
            defaultValue: '',
        },
        badge: {
            description: "Set the Badge ",
            control: {
                disable: true
            },
        },

        action: {
            description: "By using this you  can add some actions",
            control: {
                disable: true
            },

        },
    },
}


const Template = ({ ...rest }: any) => {
    return (
        <Card title="Notification">
            <Announcement
                date={rest.date}
                desciption={rest.desciption}
                title={rest.title}
                badge={{
                    children: "New",
                    type: "success",
                    variant: 'accent'
                }}
            />
        </Card>
    )
}

export const Primary = Template.bind({})
//Announcement with Description
export const AnnouncementWithDescription: any = Template.bind({})
AnnouncementWithDescription.decorators = [
    () => (
        <Card>
            <Announcement
                title=' Announcement With Description'
                desciption={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
                }
                date={'Yesterday'}
                
            />

        </Card>
    ),
]
//Announcement with Badge
export const AnnouncementWithBadge: any = Template.bind({})
AnnouncementWithBadge.decorators = [
    () => (
        <Card>
            <Announcement
                title=' Announcement With Description'
                desciption={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
                }
                date={'Yesterday'}
                badge={{
                    children: "New",
                    type: "success",
                    variant: 'accent'
                }}
            />

        </Card>
    ),
]
//Announcement with Action
export const AnnouncementWithActions: any = Template.bind({})
AnnouncementWithActions.decorators = [
    () => (
        <Card>
            <Announcement
                title=' Announcement With Description'
                desciption={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
                }
                date={'Yesterday'}
                badge={{
                    children: "New",
                    type: "success",
                    variant: 'accent'
                }}
                action={{
                    label: "View Details",
                    onClick: () => alert("Hello")
                }}
            />

        </Card>
    ),
]
//Multiple Announcement
export const MultipleAnnouncement: any = Template.bind({})
MultipleAnnouncement.decorators = [
    () => (
        <Card>
            <Announcement
                title=' Announcement With Description'
                desciption={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
                }
                date={'Yesterday'}
                badge={{
                    children: "New",
                    type: "success",
                    variant: 'accent'
                }}
                action={{
                    label: "View Details",
                    onClick: () => alert("Hello"),
                }}
            />
            <Announcement
                title=' Announcement With Description'
                desciption={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
                }
                date={'Yesterday'}
                action={{
                    label: "View Details",
                    onClick: () => alert("Hello")
                }}
            />
            <Announcement
                title='The product upload has been finished.'
                date={'Yesterday'}

            />
            <Announcement
                title=' Announcement With Description'
                desciption={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"
                }
                date={'Yesterday'}
            />
        </Card>
    ),
]


