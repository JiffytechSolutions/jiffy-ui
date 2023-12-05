import React, { useEffect, useMemo, useState } from "react";
import { Select, TextField } from "../../Form";
import { Card } from "../../Card";
import DataTable, { bulkEditRowI, columnI } from "../DataTable";
import Button from "../../Button/Button";
import "./BulkEdit.css";
import data, { DataI } from "./Data";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import productImage from "./asset/Image.png";
import AspectRatio from "../../AspectRatio/AspectRatio";
import Text from "../../Text/Text";
import ActionList from "../../ActionList/ActionList";
import AppBar from "../../AppBar/AppBar";
import AppWrapper from "../../AppWrapper/AppWrapper";
import { Label } from "../../Form/TextField/story/TextField.stories";
import ChoiceList from "../../ChoiceList/ChoiceList";

// interface DataI {
//     key: number;
//     name: string;
//     age: number;
//     price: number;
//     category: string;
//     isEditRow?: boolean;
//     description: string
// }

// const data: DataI[] = [
//     {
//         key: 1,
//         name: "ABC",
//         age: 28,
//         price: 50,
//         category: "food",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quasi ipsam ipsum iusto nihil nam accusamus, atque quo odio! Ipsam."
//     },
//     {
//         key: 2,
//         name: "DEF",
//         age: 30,
//         price: 130,
//         category: "clothing",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quasi ipsam ipsum iusto nihil nam accusamus, atque quo odio! Ipsam."
//     },
//     {
//         key: 3,
//         name: "GHI",
//         age: 12,
//         price: 470,
//         category: "food",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quasi ipsam ipsum iusto nihil nam accusamus, atque quo odio! Ipsam."
//     },
//     {
//         key: 4,
//         name: "JKL",
//         age: 95,
//         price: 130,
//         category: "grocery",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quasi ipsam ipsum iusto nihil nam accusamus, atque quo odio! Ipsam."
//     },
//     {
//         key: 5,
//         name: "MNO",
//         age: 30,
//         price: 130,
//         category: "clothing",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quasi ipsam ipsum iusto nihil nam accusamus, atque quo odio! Ipsam."
//     },
//     {
//         key: 6,
//         name: "PQR",
//         age: 50,
//         price: 430,
//         category: "Textile",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quasi ipsam ipsum iusto nihil nam accusamus, atque quo odio! Ipsam."
//     }
// ]

// const BulkEditStoryHelper = () => {
//     const [isBulkEdit, setIsBulkEdit] = useState(false)
//     const [editiedData, setEditiedData] = useState(data)
//     const [bulkCategoryValue, setBulkCategoryValue] = useState("")

//     const [selectedRowKeys, setSelectedRowKeys] = useState<{ [key: number]: boolean }>({})

//     console.log(selectedRowKeys)

//     const bulkEditDataSource = useMemo(() => {
//         return editiedData.filter(item => !!selectedRowKeys[item.key])
//     }, [selectedRowKeys, editiedData])

//     const handelCategoryChange = (newValue: string, isBulk = false, option: DataI | undefined = undefined) => {
//         if (isBulk) {
//             setBulkCategoryValue(newValue)
//             setEditiedData(prev => prev.map(item => {
//                 if (selectedRowKeys[item.key]) item.category = newValue
//                 return item
//             }))
//         }

//         else if (option) {
//             setEditiedData(prev => prev.map(item => {
//                 if (item.key === option.key) item.category = newValue
//                 return item
//             }))
//         }
//     }

//     const columns = [
//         {
//             key: "11",
//             title: "Name",
//             width: 200,
//             fixed: "left",
//             render: (item: DataI) => (!isBulkEdit || item.isEditRow) ? item.name : <TextField value={item.name} />
//         },
//         {
//             key: "22",
//             title: "Age",
//             width: 200,
//             render: (item: DataI) => (!isBulkEdit || item.isEditRow) ? item.age : <TextField value={item.age} />
//         },
//         {
//             key: "33",
//             title: "Price",
//             width: 200,
//             render: (item: DataI) => (!isBulkEdit || item.isEditRow) ? item.price : <TextField value={item.price} />
//         },
//         {
//             key: "44",
//             title: "Category",
//             width: 200,
//             render: (item: DataI) => (!isBulkEdit || item.isEditRow) ? item.category : (
//                 <Select
//                     value={item.category}
//                     onChange={(newValue: string) => handelCategoryChange(newValue, false, item)}
//                     options={[
//                         { label: "Clothing", value: "clothing" },
//                         { label: "Grocery", value: "grocery" },
//                         { label: "Food", value: "food" }
//                     ]}
//                 />
//             )
//         },
//         {
//             key: "55",
//             title: "Description",
//             width: 200,
//             render: (item: DataI) => (!isBulkEdit || item.isEditRow) ? item.description : <TextField value={item.description} />
//         }
//     ]

//     const bulkEditRowDataSource = {
//         key: 0,
//         name: <TextField value="" placeHolder='Enter name for bulk update' />,
//         // age : <TextField value="" placeHolder='Enter age for bulk upload' />,
//         price: <TextField value="" placeHolder='Enter price for bulk update' />,
//         category: <Select
//             // label='Category'
//             placeholder='Enter category for bulk update'
//             value={bulkCategoryValue}
//             onChange={(newValue: string) => handelCategoryChange(newValue, true)}
//             options={[
//                 { label: "Clothing", value: "clothing" },
//                 { label: "Grocery", value: "grocery" },
//                 { label: "Food", value: "food" }
//             ]}
//         />,
//         isEditRow: true

//     }

//     useEffect(() => {
//         let seleRowKeys: {
//             [key: string]: boolean
//         } = {}
//         data.map((item) => {
//             seleRowKeys[item.key] = false
//         })
//         setSelectedRowKeys(seleRowKeys)
//     }, [])

//     return <Card
//         title="Bulk Edit"
//         action={<Button onClick={() => setIsBulkEdit(prev => !prev)} size='extraThin' isDisabled={!Object.values(selectedRowKeys).some((item) => item === true)
//         } > Bulk Edit</Button >}
//     >
//         <DataTable
//             tableLayout='fixed'
//             isResizable
//             customClass={isBulkEdit ? 'inte-dataTable--bulkEdit' : ""}
//             columns={columns}
//             dataSource={isBulkEdit ? [bulkEditRowDataSource, ...bulkEditDataSource] : editiedData}
//             rowSelection={isBulkEdit ? undefined : {
//                 selectedRowKeys: selectedRowKeys,
//                 multi: true,
//                 onSelectChange: (newSelectedRows: any) => setSelectedRowKeys(newSelectedRows)
//             }}
//         />
//     </Card >
// }

type selectedRowKey = {
  [key: string]: boolean | "indeterminate";
};

type PriceEditorDataI = {
  currValue: string,
  selectValue: string,
  textFieldValue: string,
  updatedValue: string
}

type PriceEditorState = {
  [key: string]: PriceEditorDataI
}

type simpleObj = { [key: string]: string };

const BulkEditStoryHelper = ({ ...rest }) => {
  const [selectedRowKey, setSelectedRowKey] = useState<selectedRowKey>({});

  const [currData, setCurrData] = useState(data);

  const [bulkEditorValue, setBulkEditorValue] = useState<simpleObj>({
    "Handling Time": "",
    "Country Of Origin": "",
  });

  const [bulkPriceEditorValue, setBulkPriceEditorValue] = useState({
    selectValue : "",
    textFieldValue : "",
  })

  const [priceEditorData, setPriceEditorData] = useState<PriceEditorState>({})

  const originCountries = [
    {
      label: "Japan",
      value: "Japan",
    },
    {
      label: "USA",
      value: "USA",
    },
    {
      label: "South Korea",
      value: "South Korea",
    },
    {
      label: "Taiwan",
      value: "Taiwan",
    },
    {
      label: "China",
      value: "China",
    },
  ];

  const changePairValue = (item: DataI, index: string, value: string) => {
    item[index as keyof DataI] = value;
    return item;
  };

  const handelDataChange = (value: string, key: string, index: string) => {
    setCurrData((prev) =>
      prev.map((item) =>
        item.key === key ? changePairValue(item, index, value) : item
      )
    );
  };

  const handelBulkEditChange = (value: string, index: string) => {
    setCurrData((prev) =>
      prev.map((item) => {
        // if(selectedRowKey[item.key])
        item[index as keyof DataI] = value;
        return item;
      })
    );
    setBulkEditorValue((prev) => {
      prev[index as string] = value;
      return prev;
    });
  };

  console.log(priceEditorData)

  const getUpdatedValue = (prevValue: number, selectValue: string, textFieldValue: number) => {
    switch (selectValue) {
      case "Increase by Percentage":
        return `INR ${prevValue + ((textFieldValue / 100) * prevValue)}`
      case "Decrease by Percentage":
        return `INR ${prevValue - ((textFieldValue / 100) * prevValue)}`
      case "Decrease by Fixed Value":
        return `INR ${prevValue - textFieldValue}`
      case "Increase by Fixed Value":
        return `INR ${prevValue + textFieldValue}`
    }
  }

  console.log(priceEditorData , "priceEditorData")

  const columns: columnI[] = [
    {
      key: "1",
      width: 350,
      // align : "center",
      dataIndex: "Product Details",
      title: "Product Details",
      fixed: "left",
      render: (item: string) => (
        <FlexLayout wrap="noWrap" spacing="tight">
          <AspectRatio ratio={1} style={{ width: "32px" }}>
            <img src={`${productImage}`} />
          </AspectRatio>
          <Text>{item}</Text>
        </FlexLayout>
      ),
      editor: "Edit this row to update as bulk",
    },
    {
      key: "2",
      width: 200,
      // align : "center",
      dataIndex: "SKU",
      title: "SKU",
    },
    {
      key: "3",
      width: 350,
      align: "left",
      dataIndex: "Title",
      title: "Title",
    },
    {
      key: "4",
      width: 150,
      // align : "center",
      dataIndex: "Description",
      title: "Description",
      render: (item: string) => (
        <Button halign="center" isFullWidth type="textButton">
          View
        </Button>
      ),
      editor: (
        <Button type="outlined" halign="center" isFullWidth>
          Edit
        </Button>
      ),
    },
    {
      key: "5",
      width: 250,
      // align : "center",
      // dataIndex: "Handling Time",
      title: "Handling Time",
      render: (item: DataI) => (
        <FlexLayout spacing="extraTight" wrap="noWrap" valign="center">
          <Text fontweight="bold" customClass="no-wrap-text"> Days :</Text>
          <TextField
            type="number"
            min={1}
            value={item["Handling Time"].split(" ")[0]}
            onChange={(newValue) =>
              handelDataChange(newValue, item.key, "Handling Time")
            }
          />
        </FlexLayout>
      ),
      editor: (
        <FlexLayout spacing="extraTight" wrap="noWrap" valign="center">
          <Text fontweight="bold" customClass="no-wrap-text"> Days :</Text>
          <TextField
            type="number"
            value={bulkEditorValue["Handling Time"]}
            onChange={(newValue) =>
              handelBulkEditChange(newValue, "Handling Time")
            }
          />
        </FlexLayout>
      ),
    },
    {
      key: "6",
      width: 600,
      // align : "center",
      // dataIndex: "Standard Price",
      title: "Standard Price",
      render: (item: DataI) => <PriceEditor
        updatedValue={priceEditorData[item.key]?.updatedValue}
        currValue={priceEditorData[item.key]?.currValue}
        textFieldValue={priceEditorData[item.key]?.textFieldValue}
        selectValue={priceEditorData[item.key]?.selectValue}
        onSelectValueChange={(newValue: string) => setPriceEditorData(prev => ({ ...prev, [item.key]: ({ ...prev[item.key], selectValue: newValue }) }))}
        onTextFieldChange={(newValue: string) => {
          const prevValue = Number(priceEditorData[item.key]?.currValue.split(" ")[1]);
          const selectValue = priceEditorData[item.key]?.selectValue;
          const newUpdatedValue = getUpdatedValue(prevValue, selectValue, Number(newValue));
          setPriceEditorData(prev => ({ ...prev, [item.key]: ({ ...prev[item.key], textFieldValue: newValue, updatedValue: newUpdatedValue ?? "" }) }))
        }}
      />,
      editor: (
        <PriceEditor 
          selectValue={bulkEditorValue.selectedValue}
          textFieldValue={bulkEditorValue.textFieldValue}
          onSelectValueChange={(newValue) =>{
            setPriceEditorData(prev => {
              const newData = {...prev}
              Object.keys(newData).map(item => {
                newData[item].selectValue = newValue
              })
              return newData
            })
            setBulkEditorValue(prev => ({...prev , selectedValue : newValue}))
          }}
          onTextFieldChange={(newValue) =>{
            setPriceEditorData(prev => {
              const newData = {...prev}
              Object.keys(newData).map(item => {
                newData[item].textFieldValue = newValue
                newData[item].updatedValue = getUpdatedValue(Number(newData[item].currValue.split(" ")[1]) ,bulkEditorValue.selectedValue , Number(newValue) ) ?? ""
              })
              return newData
            })
            setBulkEditorValue(prev => ({...prev , textFieldValue : newValue}))
          }}
        />
      ),
    },
    {
      key: "7",
      width: 200,
      // align : "center",
      dataIndex: "Inventory",
      title: "Inventory",
    },
    {
      key: "8",
      width: 200,
      // align : "center",
      dataIndex: "Product ID",
      title: "Product ID",
    },
    {
      key: "9",
      width: 200,
      // align : "center",
      dataIndex: "Product ID Type",
      title: "Product ID Type",
    },
    {
      key: "10",
      width: 200,
      // align : "center",
      // dataIndex: "Country Of Origin",
      title: "Country Of Origin",
      render: (item: DataI) => (
        <Select
          options={originCountries}
          value={item["Country Of Origin"]}
          onChange={(newValue: string) =>
            handelDataChange(newValue, item.key, "Country Of Origin")
          }
        />
      ),
      editor: (
        <Select
          options={originCountries}
          value={bulkEditorValue["Origin Of Country"]}
          onChange={(newValue) =>
            handelBulkEditChange(newValue, "Country Of Origin")
          }
        />
      ),
    },
    {
      key: "11",
      width: 200,
      // align : "center",
      dataIndex: "Condition",
      title: "Condition",
    },
    {
      key: "12",
      width: 200,
      // align : "center",
      dataIndex: "Sale Price",
      title: "Sale Price",
    },
    {
      key: "13",
      width: 200,
      // align : "center",
      dataIndex: "Sale Start Date",
      title: "Sale Start Date",
    },
    {
      key: "14",
      width: 200,
      // align : "center",
      dataIndex: "Sale End Date",
      title: "Sale End Date",
    },
    {
      key: "15",
      width: 200,
      // align : "center",
      dataIndex: "Item Weight",
      title: "Item Weight",
    },
    {
      key: "16",
      width: 200,
      // align : "center",
      dataIndex: "Item Weight Unit",
      title: "Item Weight Unit",
    },
    {
      key: "17",
      width: 200,
      // align : "center",
      dataIndex: "Batteries Included",
      title: "Batteries Included",
    },
    {
      key: "18",
      width: 200,
      // align : "center",
      dataIndex: "Dangerous Goods Regulations",
      title: "Dangerous Goods Regulations",
    },
    {
      key: "19",
      width: 200,
      // align : "center",
      dataIndex: "Fulfillment Centre ID",
      title: "Fulfillment Centre ID",
    },
  ];

  const handelSelectChange = (newValue: selectedRowKey) => {
    console.log(newValue);
    setSelectedRowKey(newValue);
  };

  useEffect(() => {
    const keysInData: selectedRowKey = {};
    data.map((item) => {
      keysInData[item.key] = false;
    });

    const priceData: PriceEditorState = {}
    data.map((item) => {
      priceData[item.key] = ({
        currValue: item["Standard Price"],
        selectValue: "",
        textFieldValue: "",
        updatedValue: ""
      })
    })

    setPriceEditorData(priceData)

    setSelectedRowKey(keysInData);
  }, [data]);

  const bulkEditRow: bulkEditRowI[] = [
    {
      editior: "Edit this row to update as bulk",
      key: "Product",
      fixed: "left",
    },
    {
      editior: "",
      key: "Product111",
    },
    {
      editior: "",
      key: "Product33",
    },
    {
      editior: (
        <Button type="outlined" halign="center" isFullWidth>
          Edit
        </Button>
      ),
      key: "Product2",
    },
    {
      editior: (
        <FlexLayout spacing="extraTight" wrap="noWrap" valign="center">
          <Text fontweight="bold" customClass="no-wrap-text"> Days :</Text>
          <TextField
            type="number"
            value={bulkEditorValue["Handling Time"]}
            onChange={(newValue) =>
              handelBulkEditChange(newValue, "Handling Time")
            }
          />
        </FlexLayout>
      ),
      key: "Product3",
    },
    {
      // colSpan : 2,
      editior: (
        <PriceEditor 
          selectValue={bulkEditorValue.selectedValue}
          textFieldValue={bulkEditorValue.textFieldValue}
          onSelectValueChange={(newValue) =>{
            setPriceEditorData(prev => {
              const newData = {...prev}
              Object.keys(newData).map(item => {
                newData[item].selectValue = newValue
              })
              return newData
            })
            setBulkEditorValue(prev => ({...prev , selectedValue : newValue}))
          }}
          onTextFieldChange={(newValue) =>{
            setPriceEditorData(prev => {
              const newData = {...prev}
              Object.keys(newData).map(item => {
                newData[item].textFieldValue = newValue
                newData[item].updatedValue = getUpdatedValue(Number(newData[item].currValue.split(" ")[1]) ,bulkEditorValue.selectedValue , Number(newValue) ) ?? ""
              })
              return newData
            })
            setBulkEditorValue(prev => ({...prev , textFieldValue : newValue}))
          }}
        />
      ),
      key: "Pro1",
    },
    {
      colSpan: 3,
      editior: "",
      key: "Product5",
    },
    {
      // colSpan : 2,
      editior: (
        <Select
          options={originCountries}
          value={bulkEditorValue["Origin Of Country"]}
          onChange={(newValue) =>
            handelBulkEditChange(newValue, "Country Of Origin")
          }
        />
      ),
      key: "Product1",
    },
    // {
    //     colSpan : 18,
    //     key : "Product2",
    //     editior : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio doloremque voluptate, natus cumque deleniti eius nihil explicabo asperiores voluptatem?"
    // }
  ];

  const [openChoiceList , setOpenChoiceList] = useState(false)
  const [choiceListValue , setChoiceListValue] = useState(["1" , "4" , "5" , "6" , "10" ])

  const choiceListOptions = useMemo(() => {
    return columns.map(column => ({label : column.title , value : column.key}))
  },[columns])

  const currentShowingColumns = useMemo(() => {
    return columns.filter(item => choiceListValue.includes(item.key))
  },[choiceListValue , columns])

  const choiceListActivator = <Button type="outlined" disclosure onClick={() => setOpenChoiceList(prev => !prev)}>Customize Columns</Button>

  const scrollX = useMemo(() => {
    let t  = 0;
    currentShowingColumns.map(column => {
      t+=column.width ?? 0
    })
    return t
  },[currentShowingColumns])

  return (
    <AppWrapper 
      embeddedView
      appBar={<AppBar 
        connectLeft="Edit Products"
        connectRight={
          <ChoiceList 
            activator={choiceListActivator}
            onClose={() => setOpenChoiceList(false)}
            isOpen={openChoiceList}
            options={choiceListOptions}
            value={choiceListValue}
            onChange={(newvalue) => setChoiceListValue(newvalue)}
            isMulti
          />
        }
      />}
      customClass="bulk-edit-story-wrapper"
    >
      <DataTable
        isFixedHeader
        // bulkEditRow={bulkEditRow}
        // rowSelection={{
        //     selectedRowKeys : selectedRowKey,
        //     onSelectChange : handelSelectChange
        // }}
        scrollX={scrollX}
        isResizable
        stickyScrollBar
        bulkEditTable
        // scrollX={3000}
        customClass="inte-dataTable--bulkEdit"
        columns={currentShowingColumns}
        dataSource={currData}
      />
    </AppWrapper>
  );
};

interface PriceEditorI {
  currValue?: string;
  selectValue?: string;
  textFieldValue?: string;
  onTextFieldChange: (newValue: string) => void;
  onSelectValueChange: (newValue: string) => void;
  updatedValue?: string;
}

const PriceEditor = ({ ...props }: PriceEditorI) => {

  const [selectValue, setSelectValue] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const buttonName = props.selectValue?.length ? props.selectValue : "Choose Option"

  const activator = <Button isFullWidth halign="spaceBetween" disclosure type="textButton" onClick={() => setIsOpen(prev => !prev)}>
    {
      buttonName
    }
  </Button>

  return (
    <FlexLayout wrap="noWrap" spacing="loose" valign="center" halign="fill"  customClass="bulkEdit-price-editor" desktopWidth="33" tabWidth="33" mobileWidth="33">
      {/* <FlexLayout wrap="noWrap" spacing="mediumTight" valign="center" halign="fill" > */}
        <ActionList
          customClass="price-edit-action-list"
          isOpen={isOpen}
          activator={activator}
          onClose={() => setIsOpen(false)}
          options={[
            {
              title: "Increase",
              items: [
                {
                  content: "By Percentage",
                  onClick() {
                    props.onSelectValueChange("Increase by Percentage")
                  },
                },
                {
                  content: "Fixed Value",
                  onClick() {
                    props.onSelectValueChange("Increase by Fixed Value")
                  },
                }
              ]
            },
            {
              title: "Decrease",
              items: [
                {
                  content: "By Percentage",
                  onClick() {
                    props.onSelectValueChange("Decrease by Percentage")
                  },
                },
                {
                  content: "Fixed Value",
                  onClick() {
                    props.onSelectValueChange("Decrease by Fixed Value")
                  },
                }
              ]
            }
          ]}
        />
        <TextField
          // isDisabled={props.selectValue ? false : true}
          type="number"
          min={0}
          value={props.textFieldValue}
          onChange={(newValue: string) => props.onTextFieldChange(newValue)}
        />
      {/* </FlexLayout> */}
      <Text>{props.updatedValue?.length ? props.updatedValue : props.currValue}</Text>
    </FlexLayout>
  )
}

export default BulkEditStoryHelper;
