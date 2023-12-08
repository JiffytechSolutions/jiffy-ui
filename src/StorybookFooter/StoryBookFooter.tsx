
import React from "react";
import { FlexLayout, Text, TextLink } from "../components";
import { StoryBookFooterLogo } from './FooterLogo'
// import { TextLink } from "../components/TextLink/TextLink";
import TextStyles  from "../components/TextStyles/TextStyles";


export const StoryBookFooter = () => {

    return (
        <>
            <div className="storybook-footer">
                <FlexLayout direction="vertical" spacing="extraLoose">
                    <FlexLayout halign="fill" valign="center">
                        <StoryBookFooterLogo />
                        <TextLink label="CedCommerce Website" />
                    </FlexLayout>
                    <Text alignment="left" customClass="none" textcolor="subdued" fontweight="normal" type="T-8">
                    © 2023 CedCommerce. All Rights Reserved. Ounce@version3.0
                    </Text>
                </FlexLayout>
            </div>
        </>
    )
}
export default StoryBookFooter;