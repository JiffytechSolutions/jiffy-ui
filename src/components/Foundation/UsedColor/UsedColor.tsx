import React from 'react'

import TextStyle from '../../TextStyle/TextStyle'
import VerticalFlex from '../../VerticalFlex/VerticalFlex'

export default function UsedColor() {
    const UsedColor = [
        {
            name: "Type",
            colors: [
                {
                    name: '--jiffyui-white',
                    colorCode: "#ffffff",
                    description: "Define background color for body, drawer, modal, dropdown, popover.",
                    whereUsed: "Background"
                },
                {
                    name: '--jiffyui-naturalDark-900',
                    colorCode: "#40566D",
                    description: "The global text color.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jiffyui-naturalLight-300',
                    colorCode: "#CBD5E2",
                    description: "Use for border, default flat background color, tab, and dropdown hover color.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jiffyui-naturalLight-500',
                    colorCode: "#90A5BB",
                    description: "Use for border, default flat background color, tab, and dropdown hover color.",
                    whereUsed: "The disable text color"
                }
            ]
        },
        {
            name: "Neutral",
            colors: [
                {
                    name: '--jiffyui-naturalLight-300',
                    colorCode: "#CBD5E2",
                    description: "Use for the secondary flat variant background color for buttons and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jiffyui-naturalDark-1300',
                    colorCode: "#0C1927",
                    description: "Use for the Neutral background color for avatar, buttons, badges, inputs hover & focus, Tab active color",
                    whereUsed: "Forground"
                },
                {
                    name: '--jiffyui-black',
                    colorCode: "#000",
                    description: "Use for the neutral buttons hover & focus color",
                    whereUsed: "Muted"
                },
                {
                    name: '--jiffyui-white',
                    colorCode: "#ffffff",
                    description: "Use for the primary avatar, button & badge text color",
                    whereUsed: "The disable text color"
                }
            ]
        },
        {
            name: "Primary",
            colors: [
                {
                    name: '--jiffyui-Cerulean-100',
                    colorCode: "#D8E4FD",
                    description: "Use for the primary flat variant background color for buttons and badges., Use for the info flat variant background color for alert and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jiffyui-Cerulean-600',
                    colorCode: "#2950DA",
                    description: "Use for the primary solid variant background color for avatar, buttons and badges., Use for the info solid variant color for alert, avatar, loader, progressbar, tooltip, step and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jiffyui-Cerulean-800',
                    colorCode: "#2243B6",
                    description: "Use for the primary buttons hover & focus color, Use for the badge & progress bar text color",
                    whereUsed: "Muted"
                },

            ]
        },
        {
            name: "Negative",
            colors: [
                {
                    name: '--jiffyui-Negative-100',
                    colorCode: "#FEE4E2",
                    description: "Use for the danger flat variant background color for alert, buttons and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jiffyui-Negative-600',
                    colorCode: "#D92D20",
                    description: "Use for the danger solid variant background & outline border color for alert, avatar, buttons and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jiffyui-Negative-700',
                    colorCode: "#B42318",
                    description: "Use for the danger buttons hover, flat badge text color",
                    whereUsed: "Muted"
                },
            ]
        },
        {
            name: "Warning",
            colors: [
                {
                    name: '--jiffyui-Notice-100',
                    colorCode: "#FFE1CC",
                    description: "Use for the warning flat variant background color for alert and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jiffyui-Notice-400',
                    colorCode: "#FF9040",
                    description: "Use for the warning solid variant background & outline border color for alert, avatar and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jiffyui-Notice-700',
                    colorCode: "#C65C10",
                    description: "Use for the flat badge text color",
                    whereUsed: "Muted"
                },
            ]
        },
        {
            name: "Success",
            colors: [
                {
                    name: '--jiffyui-Possitive-200',
                    colorCode: "#B6ECD1",
                    description: "Use for success flat color for alert & badges",
                    whereUsed: "Muted"
                },
                {
                    name: '--jiffyui-Possitive-600',
                    colorCode: "#00A251",
                    description: "Use for the success solid variant color for alert, avatar, loader, progressbar, tooltip, step and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jiffyui-Possitive-700',
                    colorCode: "#008743",
                    description: "Use for the badge & progress bar text color",
                    whereUsed: "Muted"
                },
            ]
        }
    ]
    return (
        <div>
            {
                UsedColor.map((item: any) => {
                    return (
                        <div className='used-color'>
                            <VerticalFlex gap={20}>
                                <TextStyle as='h6' type='LgHeading' fontWeight='Bold'>{item.name}</TextStyle>
                                {item.colors.map((itemc: any) => {
                                    return (

                                        <VerticalFlex gap={4}>
                                            <TextStyle as='p'>Var name: {itemc.name}</TextStyle>
                                            <div className='color-box' style={{ height: "50px", width: "150px", backgroundColor: itemc.colorCode }}></div>
                                            <TextStyle as='p'>Color code: {itemc.colorCode}</TextStyle>
                                            <TextStyle as='p'>Description: {itemc.description}</TextStyle>
                                        </VerticalFlex>
                                    )
                                })}
                            </VerticalFlex>
                        </div>
                    )
                })
            }
        </div>
    )
}
