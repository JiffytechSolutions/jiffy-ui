import React from 'react';
import TextEditor from "../TextEditor";
import { Card } from '../../Card';

export default {
    title: "Components/TextEditor",
    component: TextEditor,
    parameters: {
        design: {
            type: 'figma',
            url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=16756-1366&mode=design&t=Eb9j5huo4gkBGMHa-0"
        }
    },
    argTypes: {

    }
}

const Template = ({ ...rest }) => {
    return (
        <Card
            title="Text Editor Primary"
        >
            <TextEditor
                placeholder='Start Typing Here...'
            />
        </Card>
    )
}

export const Primary: any = Template.bind({})