import React, { useState } from "react";
import { logo, menu, sideBarLogo } from "../data";
import TopNavBar from "../TopNavBar";
import Button from "../../Button/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import { Bell, User } from "../../../icons";
import AppWrapper from "../../AppWrapper/AppWrapper";
import SideBar from "../../SideBar/SideBar";
import PageFooter from "../../PageFooter/PageFooter";
import AnnouncementBar from "../../AnnouncementBar/AnnouncementBar";
import AppProvider from "../../../utilities/context/AppContext";
import useWindowResize from "../../../utilities/useWindowResize";
import "./TopNavStory.css";
import getClassNames from "../../../utilities/getClassnames";

export default {
  title: "Components/TopNavBar",
  component: TopNavBar,
};

const Template = ({ ...rest }) => {
  return (
    <TopNavBar
      menu={menu}
      onChange={() => {}}
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

// AppWrapper with Top Nav Bar
const sideBar = () => {
  const handelMenuChange = (newPath: string) => {
    // console.log("newPath => ", newPath);
  };

  return (
    <SideBar logo={sideBarLogo} onChange={handelMenuChange}>
      <SideBar.Section title="General" menu={menu} />
    </SideBar>
  );
};

// TopNav Bar AppWrapper
export const TopNavBarAppWrapper: any = Template.bind({});
TopNavBarAppWrapper.decorators = [
  () => {
    const { width } = useWindowResize();
    const [announcementBar, setAnnouncementBar] = useState(true);

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
          customClass={getClassNames({
            "inte-TopNav__customClass": width > 991,
          })}
          appBar={
            <TopNavBar
              menu={menu}
              onChange={() => {}}
              connectLeft={logo}
              connectRight={
                <ButtonGroup>
                  <Button type="outlined" icon={<Bell />} size="thin" />

                  <Button type="outlined" icon={<User />} size="thin" />
                </ButtonGroup>
              }
            />
          }
          sideBar={sideBar()}
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
            reprehenderit ducimus eveniet vero, sint maxime quidem veritatis
            saepe quasi impedit voluptatum adipisci recusandae illum unde
            dolores beatae laudantium aspernatur. Perspiciatis aspernatur
            officiis ad, ducimus praesentium facilis obcaecati aut similique
            provident accusamus blanditiis ratione quae minus dolores inventore
            culpa? Iusto incidunt commodi veniam tempora eligendi itaque? Dicta
            eius porro voluptate quam ratione nostrum sunt quae id inventore non
            natus, corporis vero fuga eum accusamus unde possimus. Consequatur,
            optio eaque est amet architecto, exercitationem laborum dicta harum
            magni dolorum quod soluta nisi autem eum illo quidem sapiente
            blanditiis. Tempora iste iure, facere voluptatibus cupiditate odit
            quod molestiae tempora. Odio fuga porro cum voluptatibus? Dolorem
            fuga doloribus molestias facere rerum, exercitationem, sint id non
            eaque tempore, soluta fugiat?
          </p>
        </AppWrapper>
      </AppProvider>
    );
  },
];
