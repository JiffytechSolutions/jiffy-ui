import React, { useState } from "react";
import { Badge, Card, Text } from "../..";
import SpyTabs from "../SpyTabs";
import { Minimize } from "../../../icons";

export default {
  title: "Components/Navigation/SpyTabs",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=4915-440276&t=vybTUvZSW4IIqAUa-0",
    },
  },
  component: SpyTabs,
  argTypes: {
    tabs: {
      description: `<table>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>icon</code></td>
          <td><code>React.ReactNode</code></td>
          <td>The icon component to render before label on the tab</td>
        </tr>
        <tr>
          <td><code>badge</code></td>
          <td><code>React.ReactNode</code></td>
          <td>The badge component to render after label on the tab</td>
        </tr>
        <tr>
          <td><code>label<span style="color:red" >*</span></code></td>
          <td><code>string</code> or <code>React.ReactNode</code></td>
          <td>The text label to render on the tab</td>
        </tr>
        <tr>
          <td><code>key<span style="color:red" >*</span></code></td>
          <td><code>string</code> or <code>number</code></td>
          <td>The unique identifier for the tab</td>
        </tr>
        <tr>
          <td><code>content<span style="color:red" >*</span></code></td>
          <td><code>React.ReactNode</code></td>
          <td>Content of this tab section</td>
        </tr>
      </tbody>
    </table>`,
      control: {
        type: "object",
        disable: true,
      },
    },
    direction: {
      description:
        "The direction in which the tabs are displayed. Defaults to horizontal. <br><span style='color:red'>Note*</span><br> Vertical Tabs only show when window <code>width > = 768px</code>",
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      defaultValue: "horizontal",
    },
    spacing: {
      description:
        "Manages the spacing between Tabs Nav and Content <table><thead><tr><th>Props</th><th>Value</th></tr></thead><tbody><tr><td><strong>none</strong></td><td>0</td></tr><tr><td><strong>extraTight</strong></td><td>4px</td></tr><tr><td><strong>mediumTight</strong></td><td>8px</td></tr><tr><td><strong>tight</strong></td><td>12px</td></tr><tr><td><strong>loose</strong></td><td>16px</td></tr><tr><td><strong>mediumLoose</strong></td><td>20px</td></tr><tr><td><strong>extraLoose</strong></td><td>24px</td></tr><tbody></table>",
      control: {
        type: "radio",
        options: [
          "none",
          "extraTight",
          "mediumTight",
          "tight",
          "loose",
          "mediumLoose",
          "extraLoose",
        ],
      },
      defaultValue: "none",
    },
    isFitted: {
      description: "Whether the tabs should be fitted to their content.",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    customClass: {
      description: "A custom class name to be added to the Tabs component.",
      control: {
        type: "text",
      },
      defaultValue: "custom_class",
    },
  },
};

const generateSpyTabsData = (n: number) =>
  Array(n)
    .fill(0)
    .map((item, ind) => ({
      label: "Tab" + ind,
      badge: (
        <Badge variant="accent" type="primary" size="small">
          55
        </Badge>
      ),
      icon: <Minimize size="16" color={"currentColor"} />,
      key: `${ind}`,
      content: (
        <Card>
          <Text as={"h3"} fontweight="bold">
            {`section${ind}`}
          </Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dicta
            ducimus corrupti quisquam dolor cum nostrum vel mollitia tenetur,
            explicabo expedita enim cumque asperiores possimus tempora,
            repellendus illum velit dolore consectetur recusandae. Quasi nobis
            error magnam libero odit earum harum esse vitae adipisci, alias
            omnis quos officiis rem officia, beatae incidunt corporis
            praesentium. Fugiat, repellat blanditiis? Earum temporibus tempora
            reiciendis ad molestiae debitis architecto, voluptates numquam sunt
            adipisci vitae tenetur facilis velit ea ipsum! Praesentium possimus
            tempore culpa fugit quae totam, esse accusantium similique? Sit,
            mollitia dolore cumque reprehenderit vero soluta, debitis nam
            maiores nemo voluptates quod inventore, suscipit dolor! Eius, fugit
            debitis. Quis accusamus in facilis corporis mollitia adipisci
            commodi nostrum nisi officia, molestiae assumenda ad vero nesciunt!
            Optio voluptates dicta ratione doloremque asperiores consequatur eum
            commodi est! Ipsum soluta eos nesciunt beatae quod saepe rerum cum
            maiores sequi officiis consequatur impedit perspiciatis quidem
            commodi architecto velit, ratione laudantium adipisci quam inventore
            dolorum odit. Nostrum ratione possimus iure commodi accusantium
            expedita molestiae architecto. Odit, necessitatibus eius minima
            consequatur corporis omnis. Doloremque, itaque quod? Veritatis
            culpa, velit voluptatum assumenda, quasi eos aut non sit amet
            possimus deleniti tempora quam veniam, delectus deserunt! Itaque,
            quo, hic laboriosam deleniti error illo necessitatibus dignissimos
            ab possimus officia quam ea sunt cupiditate? Placeat debitis
            quibusdam saepe molestiae ullam ipsa tempore! Amet totam, architecto
            harum odit voluptates porro voluptatum optio necessitatibus corrupti
            aliquam nisi dolorum minus magni sequi illum repellendus mollitia ab
            pariatur voluptatem. Alias pariatur aut iusto repellat quas, vel
            aspernatur maiores doloremque sed, impedit laborum voluptatibus odio
            totam eaque voluptates ex vitae nobis magni mollitia! Similique
            fugit minus corrupti laudantium. Labore vel cumque ut mollitia
            repellat quaerat quas libero debitis! Enim ex numquam porro quasi,
            magnam reprehenderit labore esse necessitatibus quod eaque officiis
            amet dicta eveniet doloribus, tempora delectus architecto in
            cupiditate sed.
          </p>
        </Card>
      ),
    }));

const data = generateSpyTabsData(10);

const Template = ({ ...rest }) => {
  const [tabArr, setTabArr] = useState(data);

  console.log(tabArr);

  return (
    <Card>
      <SpyTabs {...rest} spacing="mediumLoose" tabs={tabArr} />
    </Card>
  );
};

export const Primary = Template.bind({});
