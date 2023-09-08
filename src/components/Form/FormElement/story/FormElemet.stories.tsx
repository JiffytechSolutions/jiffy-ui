import React, { useState } from "react";
import { FormElement } from "../../..";
import { Card } from "../../../Card";
import TextField from "../../TextField/TextField";

export default {
  title: "Components/Form/FormElement",
  component: FormElement,
  argTypes: {
    horizontal: {
      description: "this is check box description",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    condensed: {
      description: "Set condensed form Layout",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    customClass: {
      description: "Set condensed form Layout",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  return (
    <Card title="Default Vertical Form">
      <FormElement {...rest}>
        <TextField
          placeHolder="Enter Fname"
          label="Fname"
          onChange={(e) => setValue1(e)}
          value={value1}
        ></TextField>
        <TextField
          placeHolder="Enter Fname"
          label="Lname"
          onChange={(e) => setValue2(e)}
          value={value2}
        ></TextField>
        <TextField
          placeHolder="Enter Fname"
          label="Lname"
          onChange={(e) => setValue2(e)}
          value={value2}
        ></TextField>
      </FormElement>
    </Card>
  );
};

export const Default_Vertcial_Form = Template.bind({});

// Horizintal Form
export const horizontal_Form: any = Template.bind({});
horizontal_Form.decorators = [
  () => {
    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    return(
     <Card title={"Horizontal Forms"}>
       <FormElement horizontal>
        <TextField
          placeHolder="Enter Fname"
          label="Fname"
          onChange={(e) => setValue1(e)}
          value={value1}
        ></TextField>
        <TextField
          placeHolder="Enter Fname"
          label="Lname"
          onChange={(e) => setValue2(e)}
          value={value2}
        ></TextField>
        <TextField
          placeHolder="Enter Fname"
          label="Lname"
          onChange={(e) => setValue2(e)}
          value={value2}
        ></TextField>
      </FormElement>
     </Card>
    )
  },
];

// Horizintal Form
export const condensed_Form: any = Template.bind({});
condensed_Form.decorators = [
  () => {
    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    return(
     <Card title={"Condensed Forms"}>
       <FormElement horizontal condensed >
        <TextField
          placeHolder="Enter Fname"
          label="Fname"
          onChange={(e) => setValue1(e)}
          value={value1}
        ></TextField>
        <TextField
          placeHolder="Enter Fname"
          label="Lname"
          onChange={(e) => setValue2(e)}
          value={value2}
        ></TextField>
        <TextField
          placeHolder="Enter Fname"
          label="Lname"
          onChange={(e) => setValue2(e)}
          value={value2}
        ></TextField>
      </FormElement>
     </Card>
    )
  },
];

