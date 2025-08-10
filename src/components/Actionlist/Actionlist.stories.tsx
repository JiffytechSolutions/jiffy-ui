import { useRef, useState } from "react";
import  Actionlist  from "./Actionlist";
import  Button  from "../Button/Button";
import { Crosshair, Download, FileText, RefreshCcw, Slash } from "react-feather";
import React from "react";

export default {
  title: "Components/Actionlist",
  component: Actionlist,
  tags: ["autodocs"],
};

const Template = ({ ...rest }) => {
  const [active1, setActive1] = useState(-1);

  // const btnRef = useRef<any>(null);
  const  arr = [1,2,3,4,5]
  console.log(active1,"check")
  return (
    <>
    {arr.map((item,ind)=>{
      return(
    <Actionlist
          open={active1 === ind}
          onClose={() => setActive1(-1)}
          activator={
            <Button onClick={() => setActive1(active1 === ind ? -1 : ind)} children="ActionList" />
          }
          options={[
            {
              items: [
                {
                  content: "Action 1",
                  onClick: () => alert("Hello 1"),
          
                },
                {
                  content: "Action 2",
                  onClick: () => alert("Hello 2"),
                },
                {
                  content: "Action 2",
                  onClick: () => alert("Hello 3"),
                },
              ],
            },
          ]}
          // options={[]}
        />
      )
    })}
    
    </>
  );
};
export const Default = Template.bind({});

export const ActionList_with_GroupedOption: any = Template.bind({});

ActionList_with_GroupedOption.decorators = [
  () => {
    const [active1, setActive1] = useState(false);
    const btnRef1 = useRef<any>(null);

    return (
      <Actionlist
        onClose={() => setActive1(false)}
        ref={btnRef1}
        activator={
          <Button  variant="Tertiary" onClick={() => {
            setActive1(!active1)
          }} children="ActionList" />
        }
        open={active1}
        options={[
          {
            title: "title 1",
            items: [
              {
                content: "Action 1 1",
                onClick: () => alert("Hello 1 1"),
                description: "Lore ipsum",
                destructive: true,
                //  prefixIcon: <div>check</div>,
                // suffixIcon: <div>check</div>,
              },
              {
                content: "Action 1 2",
                onClick: () => alert("Hello 1 2"),
              },
              {
                content: "Action 1 3",
                onClick: () => alert("Hello 1 3"),
              },
            ],
          },
          {
            title: "title 2",
            items: [
              {
                content: "Action 2 1",
                onClick: () => alert("Hello 2 1"),
                description: "Lore ipsum",
                destructive: true,
              },
              {
                content: "Action 2 2",
                onClick: () => alert("Hello 2 2"),
              },
              {
                content: "Action 2 3",
                onClick: () => alert("Hello 2 3"),
                description: "Lore ipsum",
              },
            ],
          },
          {
            title: "title 3",
            items: [
              {
                content: "Action 3 1",
                onClick: () => alert("Hello 2 1"),
              },
              {
                content: "Action 3 2",
                onClick: () => alert("Hello 2 2"),
              },
              {
                content: "Action 3 3",
                onClick: () => alert("Hello 2 3"),
              },
            ],
          }
        ]}
        // options={[]}
      />
    );
  },
];

//Action list prefix icon
// export const Action_list_with_prefix_icon: any = Template.bind({});
// Action_list_with_prefix_icon.decorators = [
//   () => {
//     const [active, setActive] = useState(false);
//     return (
//       <Actionlist
//         onClose={() => setActive(false)}
//         activator={
//           <Button variant="Tertiary" onClick={() => setActive(!active)} children="ActionList" />
//         }
//         open={active}
//         options={[
//           {
//             items: [
//               {
//                 content: "Download",
//                 onClick: () => alert("Download"),
//                 prefixIcon: <Download size={15} />,
//               },
//               {
//                 content: "Cancel",
//                 onClick: () => alert("Hello 1 2"),
//                 prefixIcon: <Crosshair size={15} />,
//                 destructive: true,
//               },
//               {
//                 content: "Action 1 3",
//                 onClick: () => alert("Hello 1 3"),
//                 prefixIcon: <RefreshCcw size={15} />
//               },
//             ],
//           },
//         ]}
//       />
//     );
//   },
// ];

//Action list suffix icon
// export const Action_list_with_suffix_icon: any = Template.bind({});
// Action_list_with_suffix_icon.decorators = [
//   () => {
//     const [active, setActive] = useState(false);
//     return (
//       <Actionlist
//         onClose={() => setActive(false)}
//         activator={
//           <Button variant="Tertiary" onClick={() => setActive(!active)} children="ActionList" />
//         }
//         open={active}
//         options={[
//           {

//             items: [
//               {
//                 content: "Download",
//                 onClick: () => alert("Download"),
//                 suffixIcon: <Download size={15} />,
//               },
//               {
//                 content: "Cancel",
//                 onClick: () => alert("Hello 1 2"),
//                 suffixIcon: <Crosshair size={15} />,
//                 destructive: true,
//               },
//               {
//                 content: "Action 1 3",
//                 onClick: () => alert("Hello 1 3"),
//                 suffixIcon: <RefreshCcw size={15} />
//               },
//               {
//                 content: "Dsbaled action",
//                 onClick: () => alert("Hello 1 3"),
//                 suffixIcon: <Slash size={15} />,
//                 isDisabled: true,
//               },
//             ],
//           },
//         ]}
//       />
//     );
//   },
// ];
