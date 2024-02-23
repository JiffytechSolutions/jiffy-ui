import React, { useState } from "react";
import { logo, menu, sideBarLogo } from "./data";
import TopNavBar from "../TopNavBar";
import Button from "../../Button/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import { Bell, User } from "../../../icons";
import AppWrapper from "../../AppWrapper/AppWrapper";
import SideBar from "../../SideBar/SideBar";
import PageFooter from "../../PageFooter/PageFooter";
import AnnouncementBar from "../../AnnouncementBar/AnnouncementBar";
import AppProvider from "../../../utilities/context/AppContext";

export default {
  title: "Components/Layout/TopNavBar",
  component: TopNavBar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.c2843&t=vybTUvZSW4IIqAUa-0",
    },
  },
  argTypes: {
    ["menu"]: {
      description: `<table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>id<span style="color: red;">*</span></code></td>
          <td>string | number</td>
          <td>The ID of the menu item.</td>
        </tr>
        <tr>
          <td><code>label<span style="color: red;">*</span></code></td>
          <td>string</td>
          <td>The label of the menu item.</td>
        </tr>
        <tr>
          <td><code>path<span style="color: red;">*</span></code></td>
          <td>string</td>
          <td>The path of the menu item.</td>
        </tr>
        <tr>
          <td><code>icon</code></td>
          <td>React.ReactNode</td>
          <td>The icon to display before the menu item label.</td>
        </tr>
        <tr>
          <td><code>badge</code></td>
          <td>React.ReactNode</td>
          <td>The badge to display next to the menu item label.</td>
        </tr>
        <tr>
          <td><code>children</code></td>
          <td>MenuI[]</td>
          <td>An array of child menu items to display under this menu item.</td>
        </tr>
        <tr>
          <td colspan="3" style="border:1px solid black;">
          <u><strong>Note<span style="color: red;">*</span></strong></u>
          if you make path like below in menus :-
          <pre>
            <code>
              [
                {
                  id: 'parentPath',
                  label: 'Parent',
                  path: "/parentPath",
                  children: [
                    {
                      id: 'childPath1',
                      label: 'childPath1',
                      path: "/childPath1"
                    },
                    {
                      id: 'childPath2',
                      label: 'childPath2',
                      path: "/childPath2"
                    }
                  ]
                }
              ]
            </code>
          </pre>
          then the child path will made is made like :- <br>
          Children 1 : - <code>/parentPath/childPath1</code><br>
          Children 2 : - <code>/parentPath/childPath2</code>
          </td>
        </tr>
      </tbody>
    </table>
    `,
    },
    stickyTop: {
      control: {
        disable: true,
      },
      defaultValue: true,
    },
    onChange: {
      description: "Function to handle menu item click **(required)**",
    },
    connectLeft: {
      name: "connectLeft",
      description: "Placed on left side of App Bar",
      control: {
        type: "text",
        disable: true,
      },
    },
    connectRight: {
      name: "connectRight",
      description: "Placed on right side of App Bar",
      control: {
        type: "text",
        disable: true,
      },
    },
    slidesToShow: {
      description: "Placed on right side of App Bar",
      control: {
        type: "text",
      },
      defaultValue: 6,
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <TopNavBar
      {...rest}
      menu={menu}
      stickyTop={false}
      customClass={rest.customClass}
      onChange={(e) => {}}
      connectLeft={logo}
      connectRight={
        <ButtonGroup>
          <Button type="outlined" icon={<Bell />} size="thin" />
          <Button type="outlined" icon={<User />} size="thin" />
        </ButtonGroup>
      }
    />
  );
};

export const Primary = Template.bind({});

// TopNav Bar AppWrapper
export const TopNavBarFixed = ({ ...rest }) => {
  const [announcementBar, setAnnouncementBar] = useState(true);
  const handelMenuChange = (newPath: string) => {};
  const announce = (
    <AnnouncementBar
      bgImage="https://i.imgur.com/zpGUiXt.png"
      children={
        "Update available, click on download button to get the best out of our app"
      }
      onClose={() => setAnnouncementBar(false)}
      destroy
    />
  );
  return (
    <AppProvider>
      <AppWrapper
        appBar={
          <TopNavBar
            menu={menu}
            onChange={() => {}}
            // stickyTop={false}
            connectLeft={logo}
            connectRight={
              <ButtonGroup>
                <Button type="outlined" icon={<Bell />} size="thin" />

                <Button type="outlined" icon={<User />} size="thin" />
              </ButtonGroup>
            }
          />
        }
        sideBar={
          <SideBar logo={sideBarLogo} onChange={handelMenuChange}>
            <SideBar.Section title="General" menu={menu} />
          </SideBar>
        }
        appFooter={
          <PageFooter>
            <div>&copy; Cedcommerc 4.0 Ounce UI</div>
          </PageFooter>
        }
        announcementBar={announcementBar ? announce : undefined}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          dolores recusandae a libero? Fuga fugit soluta, iste ullam facere
          aperiam deserunt quas rem praesentium unde rerum sit illo commodi
          deleniti aliquid id, quidem odio similique! Quisquam doloribus
          corporis voluptatem blanditiis ad exercitationem voluptas libero
          reprehenderit ducimus eveniet vero, sint maxime quidem veritatis saepe
          quasi impedit voluptatum adipisci recusandae illum unde dolores beatae
          laudantium aspernatur. Perspiciatis aspernatur officiis ad, ducimus
          praesentium facilis obcaecati aut similique provident accusamus
          blanditiis ratione quae minus dolores inventore culpa? Iusto incidunt
          commodi veniam tempora eligendi itaque? Dicta eius porro voluptate
          quam ratione nostrum sunt quae id inventore non natus, corporis vero
          fuga eum accusamus unde possimus. Consequatur, optio eaque est amet
          architecto, exercitationem laborum dicta harum magni dolorum quod
          soluta nisi autem eum illo quidem sapiente blanditiis. Tempora iste
          iure, facere voluptatibus cupiditate odit quod molestiae tempora. Odio
          fuga porro cum voluptatibus? Dolorem fuga doloribus molestias facere
          rerum, exercitationem, sint id non eaque tempore, soluta fugiat?Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similique
        </p>
      </AppWrapper>
    </AppProvider>
  );
};

// Top Nav Bar Sticky
export const TopNavBarSticky = ({ ...rest }) => {
  const [announcementBar, setAnnouncementBar] = useState(true);
  const handelMenuChange = (newPath: string) => {};
  const announce = (
    <AnnouncementBar
      bgImage="https://i.imgur.com/zpGUiXt.png"
      children={
        "Update available, click on download button to get the best out of our app"
      }
      onClose={() => setAnnouncementBar(false)}
      destroy
    />
  );
  return (
    <AppProvider>
      <AppWrapper
        appBar={
          <TopNavBar
            menu={menu}
            onChange={() => {}}
            stickyTop={false}
            connectLeft={logo}
            connectRight={
              <ButtonGroup>
                <Button type="outlined" icon={<Bell />} size="thin" />

                <Button type="outlined" icon={<User />} size="thin" />
              </ButtonGroup>
            }
          />
        }
        sideBar={
          <SideBar logo={sideBarLogo} onChange={handelMenuChange}>
            <SideBar.Section title="General" menu={menu} />
          </SideBar>
        }
        appFooter={
          <PageFooter>
            <div>&copy; Cedcommerc 4.0 Ounce UI</div>
          </PageFooter>
        }
        announcementBar={announcementBar ? announce : undefined}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          dolores recusandae a libero? Fuga fugit soluta, iste ullam facere
          aperiam deserunt quas rem praesentium unde rerum sit illo commodi
          deleniti aliquid id, quidem odio similique! Quisquam doloribus
          corporis voluptatem blanditiis ad exercitationem voluptas libero
          reprehenderit ducimus eveniet vero, sint maxime quidem veritatis saepe
          quasi impedit voluptatum adipisci recusandae illum unde dolores beatae
          laudantium aspernatur. Perspiciatis aspernatur officiis ad, ducimus
          praesentium facilis obcaecati aut similique provident accusamus
          blanditiis ratione quae minus dolores inventore culpa? Iusto incidunt
          commodi veniam tempora eligendi itaque? Dicta eius porro voluptate
          quam ratione nostrum sunt quae id inventore non natus, corporis vero
          fuga eum accusamus unde possimus. Consequatur, optio eaque est amet
          architecto, exercitationem laborum dicta harum magni dolorum quod
          soluta nisi autem eum illo quidem sapiente blanditiis. Tempora iste
          iure, facere voluptatibus cupiditate odit quod molestiae tempora. Odio
          fuga porro cum voluptatibus? Dolorem fuga doloribus molestias facere
          rerum, exercitationem, sint id non eaque tempore, soluta fugiat?Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similiqueLorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores
          recusandae a libero? Fuga fugit soluta, iste ullam facere aperiam
          deserunt quas rem praesentium unde rerum sit illo commodi deleniti
          aliquid id, quidem odio similique! Quisquam doloribus corporis
          voluptatem blanditiis ad exercitationem voluptas libero reprehenderit
          ducimus eveniet vero, sint maxime quidem veritatis saepe quasi impedit
          voluptatum adipisci recusandae illum unde dolores beatae laudantium
          aspernatur. Perspiciatis aspernatur officiis ad, ducimus praesentium
          facilis obcaecati aut similiqueLorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nobis dolores recusandae a libero? Fuga fugit
          soluta, iste ullam facere aperiam deserunt quas rem praesentium unde
          rerum sit illo commodi deleniti aliquid id, quidem odio similique!
          Quisquam doloribus corporis voluptatem blanditiis ad exercitationem
          voluptas libero reprehenderit ducimus eveniet vero, sint maxime quidem
          veritatis saepe quasi impedit voluptatum adipisci recusandae illum
          unde dolores beatae laudantium aspernatur. Perspiciatis aspernatur
          officiis ad, ducimus praesentium facilis obcaecati aut similique
        </p>
      </AppWrapper>
    </AppProvider>
  );
};
