import React from 'react';
import TextEditor from "../TextEditor";
import { Card } from '../../Card';

export default {
    title : "Components/TextEditor",
    component : TextEditor,
    argTypes : {

    }
}

const Template = ({...rest}) => {
    return (
        <Card
            title="Text Editor Primary"
        >
            <TextEditor 
                // placeholder='Start Typing Here...'
            />
        </Card>
    )
}

export const Primary : any = Template.bind({})