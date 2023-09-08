
import React from "react";
import { FlexLayout, TextLink, TextStyles } from "../components";
import { StoryBookFooterLogo } from './FooterLogo'
// import { TextLink } from "../components/TextLink/TextLink";



export const StoryBookFooter = () => {

    return (
        <>
            <div className="storybook-footer">
                <FlexLayout direction="vertical" spacing="extraLoose">
                    <FlexLayout halign="fill" valign="center">
                        <StoryBookFooterLogo />
                        <TextLink label="CedCommerce Website" />
                    </FlexLayout>

                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        paragraphTypes="LG-1.5"
                        textcolor="light"
                        type="Paragraph"
                        utility="none"
                    >
                        © 2023 CedCommerce. All Rights Reserved. Ounce@version3.0
                    </TextStyles>
                </FlexLayout>
            </div>
        </>
    )
}
export default StoryBookFooter;