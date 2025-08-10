import React, { useState } from "react";

import { Settings } from "react-feather";
import Accordion from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component.',
      },
    },
  },
  // tags: ["autodocs"],
  argTypes: {
    // header: {
    //   description: "Enter Accordion Title",
    //   control: {
    //     type: "text",
    //   },
    //   defaultValue: "Accordion Header",
    // },
    // icon: {
    //   description: "Enter Accordion Title",
    //   control: {
    //     type: "boolean",
    //   },
    //   defaultValue: true
    // },
    // iconAlign: {
    //   description: "Icon align description",
    //   control: {
    //     type: "radio",
    //     options: ["left", "right"],
    //   },
    //   defaultValue: "right",
    // },
  },
};

const Template = ({ ...rest }) => {
  const [clicked, setClicked] = useState<number>(-1);
  const handleToggle = (index: any) => {
    if (clicked === index) {
      setClicked(-1);
    } else {
      setClicked(index);
    }
  };

  const accordionArr = [
    {
      icon: <Settings size={16} />,
      accordionHeader: "Is it accessible?",
      answer:
        "1 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      icon: <Settings size={16} />,
      accordionHeader: "Is it styled?",
      answer:
        "2 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      icon: <Settings size={16} />,
      accordionHeader: "Is it animated?",
      answer:
        "3 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
  ];

  return (
    <>
      {accordionArr.map((items: any, index: any) => {
        return (
          <Accordion
            accordionHeader={items.accordionHeader}
            key={index}
            isExpended={clicked === index}
            icon={items.icon}
            onClick={() => handleToggle(index)}
            withNumber
          >
            {items.index} {items.answer}
          </Accordion>
        );
      })}
    </>
  );
};

export const Default = Template.bind({});

//accordion_without_icons
export const AccordionWithoutIcons: any = Template.bind({});
AccordionWithoutIcons.decorators = [
  () => {
    const [clicked, setClicked] = useState<number>(-1);
    const handleToggle = (index: any) => {
      if (clicked === index) {
        setClicked(-1);
      } else {
        setClicked(index);
      }
    };
    const accordionArr = [
      {
        
        accordionHeader: "Is it accessible?",
        answer:
          "1 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
      },
      {
        
        accordionHeader: "Is it styled?",
        answer:
          "2 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
      },
      {
      
        accordionHeader: "Is it animated?",
        answer:
          "3 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
      },
    ];
    return (
      <>
        {accordionArr.map((items: any, index: any) => {
          return (
            <Accordion
              accordionHeader={items.accordionHeader}
              key={index}
              isExpended={clicked === index}
              
              onClick={() => handleToggle(index)}
              withNumber
            >
              {items.index} {items.answer}
            </Accordion>
          );
        })}
      </>
    );
  },
];
