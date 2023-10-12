import React, { useState } from "react";
import {
  Button,
  Tabs,
  TextField,
  FlexLayout,
  TextLink,
  Notification,
  Text,
} from "../..";
import Announcement from "../../Announcement/Announcement";
import DataTable from "../../DataTable/DataTable";
import FallBack from "../../FallBack/FallBack";
import { NotFound404 } from "../../FallBack/Illustration";
import Sheet from "../Sheet";

export default {
  title: "Components/Overlays/Sheet",
  component: Sheet,
  argTypes: {
    activator: {
      description: "The component on which Sheet is triggred",
      control: {
        disable: true,
      },
    },
    isOpen: {
      description: "Show or hide the Sheet.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    children: {
      description: "Enter children React Node or string",
      control: {
        type: "text",
      },
      defaultValue: "Enter children  string or ReactNode",
    },
    heading: {
      description: "You can change heading name in sheet component",
      control: {
        type: "text",
      },
      defaultValue: "Sheet Heading",
    },
    onClose: {
      description:
        "The OnClose event occurs when the dialog is closed. You can create an event handler for the OnClose event to perform specific actions upon closing a dialog.",
      control: {
        type: "function",
        disable: true,
      },
    },
    primaryAction: {
      description: `Primary Action show in sheet footer and value object format type <u><strong>Note<span style="color: red;">*</span></strong></u>
        If you use primaryAction then use like this:-
        <pre>
          <code>
          primaryAction={{
            content: "Apply",
            type: "primary",
            halign: "center",
            isFullWidth: true,
            onClick: () => {
              alert("Apply button clicked");
              setOpen(false);
            },
          }}
          </code>
        </pre>`,
      control: {
        type: true,
      },
    },
    secondaryAction: {
      description: `Secondary Action show in sheet footer and value object format type <u><strong>Note<span style="color: red;">*</span></strong></u>
        If you use secondaryaction then use like this:-
        <pre>
          <code>
          secondaryAction={{
            type: "outlined",
            isFullWidth: true,
            halign: "center",
            content: "Clear All",
            onClick: () => {
              alert("Clear All button clicked");
              setOpen(false);
            },
          }}
          </code>
        </pre>`,
      control: {
        type: true,
      },
    },
    customClass: {
      description:
        "You can add extra class in sheet component then use customClass props",
      control: {
        type: true,
      },
    },
    closeOnEsc: {
      description: "Esc key press then close sheet",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    overlayClose: {
      description: "Enable Sheet close on Esc Button click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    id: {
      description:
        "If you can pass id in sheet component then use id prop, here id is string type",
      control: {
        type: false,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const [isOpen, setOpen] = useState(rest.isOpen);
  return (
    <Sheet
      heading={rest.heading}
      overlayClose={rest.overlayClose}
      isOpen={isOpen}
      closeOnEsc={rest.closeOnEsc}
      onClose={() => setOpen(false)}
      activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
      primaryAction={{
        content: "Apply",
        type: "primary",
        halign: "center",
        isFullWidth: true,
        onClick: () => {
          alert("Apply button clicked");
          setOpen(false);
        },
      }}
      secondaryAction={{
        type: "outlined",
        isFullWidth: true,
        halign: "center",
        content: "Clear All",
        onClick: () => {
          alert("Clear All button clicked");
          setOpen(false);
        },
      }}
    >
      <Text type="T-6">{rest.children}</Text>
    </Sheet>
  );
};

export const Primary = Template.bind({});

// Sheet Witout Primary
export const Sheet_Only_Primary_Action: any = Template.bind({});
Sheet_Only_Primary_Action.decorators = [
  () => {
    const [isOpen, setOpen] = useState(false);

    return (
      <Sheet
        heading="Sheet Witout Primary"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        overlayClose={false}
        activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
        primaryAction={{
          content: "Apply",
          type: "primary",
          halign: "center",
          isFullWidth: true,
          onClick: () => {
            alert("Apply button clicked");
            setOpen(false);
          },
        }}
      >
        <Text type="T-6">Sheet witout secondary Action Button</Text>
        <TextField />
      </Sheet>
    );
  },
];

// Sheet Witout secondary Action
export const Sheet_Only_Secondary_Action: any = Template.bind({});
Sheet_Only_Secondary_Action.decorators = [
  () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <Sheet
        heading="Sheet Witout Primary"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
        secondaryAction={{
          type: "outlined",
          isFullWidth: true,
          halign: "center",
          content: "Clear All",
          onClick: () => {
            alert("Clear All button clicked");
            setOpen(false);
          },
        }}
      >
        <Text type="T-6">Sheet witout secondary Action Button</Text>
      </Sheet>
    );
  },
];

//  Disable Primary Secondary Action
export const Disable_Primary_Secondary_Action: any = Template.bind({});
Disable_Primary_Secondary_Action.decorators = [
  () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <Sheet
        heading="Sheet Witout Primary"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
        primaryAction={{
          content: "Apply",
          type: "primary",
          halign: "center",
          isFullWidth: false,
          isDisabled: true,
          onClick: () => {
            alert("Apply button clicked");
            setOpen(false);
          },
        }}
        secondaryAction={{
          type: "outlined",
          isFullWidth: true,
          halign: "center",
          content: "Clear All",
          isDisabled: true,
          onClick: () => {
            alert("Clear All button clicked");
            setOpen(false);
          },
        }}
      >
        <Text type="T-6">Sheet witout secondary Action Button</Text>
      </Sheet>
    );
  },
];

// Sheet Without Primari and Secondary Action
export const Sheet_Without_Footer: any = Template.bind({});
Sheet_Without_Footer.decorators = [
  () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <Sheet
        heading="Sheet Witout Primary"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
      >
        <Text type="T-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed,
          deserunt corrupti voluptas, expedita provident consectetur eaque amet
          ullam pariatur quam nihil? Atque consectetur rerum nemo iure id
          expedita qui ea magni recusandae? Facere nihil dignissimos quod
          dolorum id vitae quas molestiae obcaecati odio non quae sunt, maiores
          accusamus provident consequuntur recusandae, corporis distinctio! Nam
          magni officiis beatae officia similique laudantium minima ab, quam
          molestias tempore voluptatum, totam ipsum. Vitae quia id, iure
          provident expedita quas esse magni? Accusantium ad laudantium,
          recusandae est debitis corporis, amet sed fugit accusamus expedita,
          excepturi error fugiat ab perspiciatis officiis maxime veniam ut
          explicabo repellat cum nam voluptate dolore? Omnis nostrum at
          deserunt, laudantium repellat animi ullam enim incidunt voluptate hic
          alias fugiat ipsam quisquam eveniet debitis voluptates tempore vero
          ipsa! Amet laudantium, provident velit maxime tenetur eum dolorum et
          dolorem aut vero cum mollitia nesciunt dolore harum minima temporibus,
          delectus voluptate impedit! Tenetur deleniti, molestias cumque a
          quaerat voluptatem est delectus sit eaque, obcaecati aperiam, atque
          quasi. Reprehenderit error non quam provident nihil tempora voluptates
          similique iusto maxime soluta, accusamus quas aut velit beatae dolorem
          necessitatibus alias dicta, odit dolor nam. Modi ipsum reiciendis,
          beatae ut illo provident eius impedit optio, odio error laudantium
          aliquam nam necessitatibus. Fuga vitae blanditiis perferendis unde rem
          a rerum! Odio obcaecati dolores nostrum esse aliquid quo aliquam dolor
          reiciendis facere tenetur ab distinctio commodi labore non voluptas
          eligendi nisi error fugiat doloribus, debitis pariatur harum. Esse,
          praesentium eligendi modi voluptatum expedita minus beatae a fugiat
          optio commodi. Vitae excepturi nulla quisquam ea laudantium, numquam,
          ipsum harum veniam itaque minus omnis maxime possimus. Non consectetur
          vitae, culpa voluptate veniam unde perferendis fugit, a deleniti dicta
          vel tenetur. Quisquam dolores nemo repudiandae temporibus debitis
          perferendis. Omnis temporibus accusantium tempora odit laborum facere
          incidunt sit necessitatibus perspiciatis velit! Non distinctio harum
          quo. Veritatis aliquam ullam quibusdam hic doloremque cupiditate
          numquam voluptatum unde excepturi, assumenda soluta asperiores quaerat
          iure provident quae eveniet quas labore fugit odio tempora id.
          Provident debitis ad omnis voluptas facere vitae, ullam expedita
          explicabo ratione sed eligendi est amet fugit sint animi quas ab
          dolores harum delectus velit dolore unde impedit, modi vero.
          Repellendus beatae at iste accusantium voluptates quo earum, ratione,
          quasi tempora temporibus voluptate repellat laboriosam itaque, tempore
          nisi sapiente facilis eos pariatur quibusdam obcaecati! Ex fugit
          dolorum iste? Veritatis neque explicabo hic distinctio reiciendis
          recusandae, mollitia sequi delectus repudiandae magni ipsa! Ipsum,
          libero itaque voluptatem quo ipsam dolores quam eum alias minus fuga
          aut reiciendis expedita, quibusdam amet necessitatibus doloremque
          magnam non consequatur commodi cum facilis temporibus impedit hic.
          Praesentium quaerat earum error aut, voluptas repellendus adipisci
          quia suscipit inventore impedit sapiente assumenda. Inventore quas
          quaerat, tempore mollitia repudiandae, corrupti accusamus commodi
          saepe magni, pariatur ad voluptates. Quae vero ad labore recusandae.
          Harum nam, porro aperiam, voluptas corrupti itaque aliquid officiis
          commodi rerum dolor excepturi eum, aspernatur adipisci repellat
          similique ducimus deleniti id quisquam voluptate. Fuga non aperiam
          ipsam reprehenderit cum ex minima ad, quaerat eos? Sed, ea voluptatem
          doloremque consectetur fugiat nisi asperiores.
        </Text>
      </Sheet>
    );
  },
];

// Sheet with FallBack
export const Sheet_With_FallBack: any = Template.bind({});
Sheet_With_FallBack.decorators = [
  () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <Sheet
        heading="Sheet Witout Primary"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
        secondaryAction={{
          type: "outlined",
          isFullWidth: true,
          halign: "center",
          content: "View All Notifications",
          onClick: () => {
            alert("Clear All button clicked");
            setOpen(false);
          },
        }}
      >
        <FallBack
          action={
            <Button onClick={() => {}} size="large" type="primary">
              Go to Home
            </Button>
          }
          illustration={<NotFound404 />}
          subTitle={
            <FlexLayout direction="vertical" halign="center">
              <Text type="T-6">
                You haven’t any search result. Please visit wot homepage
              </Text>
              <p className="Paragraph inte-Align--center inte__text--light none inte__font--normal inte__Paragraph--font--medium  ">
                Need Help? Read our{" "}
                <TextLink label="Help Doc" onClick={function noRefCheck() {}} />{" "}
                for further details.
              </p>
            </FlexLayout>
          }
          title="Page Not Found"
        />
      </Sheet>
    );
  },
];

// Sheet with FallBack
export const Sheet_Table: any = Template.bind({});
Sheet_Table.decorators = [
  () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <Sheet
        heading="Sheet Witout Primary"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
      >
        <DataTable
          columns={[
            {
              dataIndex: "id",
              fixed: "left",
              key: "id",

              title: "Id",
            },
            {
              dataIndex: "name",
              key: "name",

              title: "Name",
            },
            {
              dataIndex: "email",
              key: "email",

              title: "Email",
            },
          ]}
          dataSource={[
            {
              address: {
                city: "Gwenborough",
                geo: {
                  lat: "-37.3159",
                  lng: "81.1496",
                },
                street: "Kulas Light",
                suite: "Apt. 556",
                zipcode: "92998-3874",
              },
              company: {
                bs: "harness real-time e-markets",
                catchPhrase: "Multi-layered client-server neural-net",
                name: "Romaguera-Crona",
              },
              email: "Sincere@april.biz",
              id: 1,
              key: "1",
              name: "Leanne Graham",
              phone: "1-770-736-8031 x56442",
              username: "Bret",
              website: "hildegard.org",
            },
            {
              address: {
                city: "Wisokyburgh",
                geo: {
                  lat: "-43.9509",
                  lng: "-34.4618",
                },
                street: "Victor Plains",
                suite: "Suite 879",
                zipcode: "90566-7771",
              },
              company: {
                bs: "synergize scalable supply-chains",
                catchPhrase: "Proactive didactic contingency",
                name: "Deckow-Crist",
              },
              email: "Shanna@melissa.tv",
              id: 2,
              key: "2",
              name: "Ervin Howell",
              phone: "010-692-6593 x09125",
              username: "Antonette",
              website: "anastasia.net",
            },
            {
              address: {
                city: "McKenziehaven",
                geo: {
                  lat: "-68.6102",
                  lng: "-47.0653",
                },
                street: "Douglas Extension",
                suite: "Suite 847",
                zipcode: "59590-4157",
              },
              company: {
                bs: "e-enable strategic applications",
                catchPhrase: "Face to face bifurcated interface",
                name: "Romaguera-Jacobson",
              },
              email: "Nathan@yesenia.net",
              id: 3,
              key: "3",
              name: "Clementine Bauch",
              phone: "1-463-123-4447",
              username: "Samantha",
              website: "ramiro.info",
            },
            {
              address: {
                city: "South Elvis",
                geo: {
                  lat: "29.4572",
                  lng: "-164.2990",
                },
                street: "Hoeger Mall",
                suite: "Apt. 692",
                zipcode: "53919-4257",
              },
              company: {
                bs: "transition cutting-edge web services",
                catchPhrase: "Multi-tiered zero tolerance productivity",
                name: "Robel-Corkery",
              },
              email: "Julianne.OConner@kory.org",
              id: 4,
              key: "4",
              name: "Patricia Lebsack",
              phone: "493-170-9623 x156",
              username: "Karianne",
              website: "kale.biz",
            },
            {
              address: {
                city: "Roscoeview",
                geo: {
                  lat: "-31.8129",
                  lng: "62.5342",
                },
                street: "Skiles Walks",
                suite: "Suite 351",
                zipcode: "33263",
              },
              company: {
                bs: "revolutionize end-to-end systems",
                catchPhrase: "User-centric fault-tolerant solution",
                name: "Keebler LLC",
              },
              email: "Lucio_Hettinger@annie.ca",
              id: 5,
              key: "5",
              name: "Chelsey Dietrich",
              phone: "(254)954-1289",
              username: "Kamren",
              website: "demarco.info",
            },
          ]}
          rowSelection={{}}
        />
      </Sheet>
    );
  },
];

// Sheet with Tabs
export const Sheet_With_Tabs: any = Template.bind({});
Sheet_With_Tabs.decorators = [
  () => {
    const notiData = [
      {
        date: "Yesterday",
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet.",
        title: "The product upload has been finished.",
        type: "success",
      },
      {
        date: "Yesterday",
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet.",
        title: "The product upload has been finished.",
        type: "warning",
      },
      {
        date: "Yesterday",
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet.",
        title: "The product upload has been finished.",
        type: "danger",
      },
      {
        date: "Yesterday",
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet.",
        title: "The product upload has been finished.",
        type: "info",
      },
    ];
    const annData = [
      {
        date: "29 Mar 2023",
        desciption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim",
        title: "Announcement With Description",
      },
      {
        date: "29 Mar 2023",
        desciption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim",
        title: "Announcement With Description",
      },
      {
        date: "29 Mar 2023",
        desciption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim",
        title: "Announcement With Description",
      },
      {
        date: "29 Mar 2023",
        desciption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim",
        title: "Announcement With Description",
      },
    ];
    const [isOpen, setOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("General");
    const resetFilter = () => {
      alert("Clear All button clicked");
    };

    const renderTabsData = () => {
      switch (selectedTab) {
        case "General":
          return (
            <>
              {notiData.map((items: any, index: number) => {
                return (
                  <Notification
                    key={index}
                    date={items.date}
                    desciption={items.desciption}
                    title={items.title}
                    type={items.type}
                  />
                );
              })}
            </>
          );
        case "Announcements":
          return (
            <>
              {annData.map((items: any, index: number) => {
                return (
                  <Announcement
                    key={index}
                    date={items.date}
                    desciption={items.desciption}
                    title={items.title}
                    badge={{
                      children: "New",
                      type: "success",
                      variant: "accent",
                    }}
                  />
                );
              })}
            </>
          );
      }
    };
    return (
      <Sheet
        heading="Sheet Witout Primary"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        activator={<Button content="Sheet" onClick={() => setOpen(!isOpen)} />}
        secondaryAction={{
          type: "outlined",
          isFullWidth: true,
          halign: "center",
          content: "View All Notifications",
          onClick: () => {
            resetFilter();
            setOpen(false);
          },
        }}
      >
        <Tabs
          direction="horizontal"
          tabs={[
            {
              key: "General",
              label: "General",
            },
            {
              key: "Announcements",
              label: "Announcements",
            },
          ]}
          value={selectedTab}
          onChange={(newTab: any) => setSelectedTab(newTab)}
        >
          <>{renderTabsData()}</>
        </Tabs>
      </Sheet>
    );
  },
];
