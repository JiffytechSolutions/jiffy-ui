import React from 'react'

import TextStyle from '../../TextStyle/TextStyle'
import FlexLayout from '../../FlexLayout/FlexLayout'
import VerticalStack from '../../VerticalStack/VerticalStack'
import Card from '../../Card/Card'

export default function UsedColor() {
    const UsedColor = [
        {
            name: "Type",
            colors: [
                {
                    name: '--jf-white',
                    colorCode: "#ffffff",
                    description: "Define background color for body, drawer, modal, dropdown, popover.",
                    whereUsed: "Background"
                },
                {
                    name: '--jf-naturalDark-900',
                    colorCode: "#737373",
                    description: "The global text color.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jf-naturalLight-300',
                    colorCode: "#CBD5E2",
                    description: "Use for border, default flat background color, tab, and dropdown hover color.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jf-naturalLight-500',
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
                    name: '--jf-naturalLight-300',
                    colorCode: "#CBD5E2",
                    description: "Use for the secondary flat variant background color for buttons and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jf-naturalDark-1300',
                    colorCode: "#0C1927",
                    description: "Use for the Neutral background color for avatar, buttons, badges, inputs hover & focus, Tab active color",
                    whereUsed: "Forground"
                },
                {
                    name: '--jf-black',
                    colorCode: "#000",
                    description: "Use for the neutral buttons hover & focus color",
                    whereUsed: "Muted"
                },
                {
                    name: '--jf-white',
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
                    name: '--jf-Cerulean-100',
                    colorCode: "#D8E4FD",
                    description: "Use for the primary flat variant background color for buttons and badges., Use for the info flat variant background color for alert and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jf-Cerulean-600',
                    colorCode: "#2950DA",
                    description: "Use for the primary solid variant background color for avatar, buttons and badges., Use for the info solid variant color for alert, avatar, loader, progressbar, tooltip, step and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jf-Cerulean-800',
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
                    name: '--jf-Negative-100',
                    colorCode: "#FEE4E2",
                    description: "Use for the danger flat variant background color for alert, buttons and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jf-Negative-600',
                    colorCode: "#D92D20",
                    description: "Use for the danger solid variant background & outline border color for alert, avatar, buttons and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jf-Negative-700',
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
                    name: '--jf-Notice-100',
                    colorCode: "#FFE1CC",
                    description: "Use for the warning flat variant background color for alert and badges.",
                    whereUsed: "Muted"
                },
                {
                    name: '--jf-Notice-400',
                    colorCode: "#FF9040",
                    description: "Use for the warning solid variant background & outline border color for alert, avatar and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jf-Notice-700',
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
                    name: '--jf-Possitive-200',
                    colorCode: "#B6ECD1",
                    description: "Use for success flat color for alert & badges",
                    whereUsed: "Muted"
                },
                {
                    name: '--jf-Possitive-600',
                    colorCode: "#00A251",
                    description: "Use for the success solid variant color for alert, avatar, loader, progressbar, tooltip, step and badges.",
                    whereUsed: "Forground"
                },
                {
                    name: '--jf-Possitive-700',
                    colorCode: "#008743",
                    description: "Use for the badge & progress bar text color",
                    whereUsed: "Muted"
                },
            ]
        }
    ]
    return (
        <VerticalStack gap={4}>
            {
                UsedColor.map((item: any) => {
                    return (
                        <div className='used-color'>
                            <VerticalStack gap={2}>
                                <TextStyle as='h6' variant='heading' fontWeight='bold'>{item.name}</TextStyle>
                                {item.colors.map((itemc: any) => {
                                    return (
                                        <Card>
                                        <VerticalStack gap={2}>
                                            <TextStyle as='p'>Var name: {itemc.name}</TextStyle>
                                            <div className='color-box' style={{ height: "50px", width: "150px", backgroundColor: itemc.colorCode }}></div>
                                            <TextStyle as='p'>Color code: {itemc.colorCode}</TextStyle>
                                            <TextStyle as='p'>Description: {itemc.description}</TextStyle>
                                        </VerticalStack>
                                        </Card>
                                    )
                                })}
                            </VerticalStack>
                        </div>
                    )
                })
            }
        </VerticalStack>
    )
}
