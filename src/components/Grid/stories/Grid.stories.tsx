import React from "react";
import Grid from "../Grid";
import  Card  from "../../Card/Card";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: {
    children: {
      description: "Provide the children of grid in <Grid.Item> Wrapper",
      control: {
        disable: true
      },
    },
    gap: {
      description: "Set gap",
      control: {
        type: "text",
      },
      defaultValue: "10px",
    },
    columns: {
      description: "Set columns",
      control: {
        type: "number",
      },
      defaultValue: 2,
    },
    customClass: {
      description: "Set custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card type={"Shadow"}>
      <Grid
        gap={rest.gap}
        columns={rest.columns}
        customClass={rest.customClass}
      >
        <Grid.Item>
          <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
            Item 1
          </div>
        </Grid.Item>
        <Grid.Item>
          <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
            Item 2
          </div>
        </Grid.Item>
        <Grid.Item>
          <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
            Item 3
          </div>
        </Grid.Item>
        <Grid.Item>
          <div style={{ backgroundColor: "lightpink", padding: "10px" }}>
            Item 4
          </div>
        </Grid.Item>
        <Grid.Item>
          <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>
            Item 5
          </div>
        </Grid.Item>
        <Grid.Item>
          <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
            Item 6
          </div>
        </Grid.Item>
      </Grid>
      <Card type={"Shadow"}>
        <div>Provide the children of grid inside the grid item wrapper</div>
        <pre>
          <code>
            {`
              <Grid>
                <Grid.Item> <Button onClick={handleClick}> click me </Button> </Grid.Item>
                <Grid.Item> <Button onClick={handleClick}> click me </Button> </Grid.Item>
                <Grid.Item> <Button onClick={handleClick}> click me </Button> </Grid.Item>
              </Grid>
            );
          };
        `}
          </code>
        </pre>
      </Card>
    </Card>
  );
};

export const Primary = Template.bind({});
