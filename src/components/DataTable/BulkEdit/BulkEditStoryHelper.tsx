import React, { useEffect, useMemo, useState } from "react";
import { Select, TextField } from "../../Form";
import { Card } from "../../Card";
import DataTable, { bulkEditRowI, columnI , DataSourceI } from "../DataTable";
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
import Modal from "../../Modal/Modal";

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

  const [currData, setCurrData] = useState<DataI[]>(structuredClone(data));

  const [bulkEditorValue, setBulkEditorValue] = useState<simpleObj>({
    "Handling Time": "",
    "Country Of Origin": "",
  });

  const [priceEditorData, setPriceEditorData] = useState<PriceEditorState>({})

  const [descriptionEditorData, setDescriptionEditorData] = useState({
    open: false,
    data: "",
    key: ""
  })

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
        item[index as keyof DataI] = value;
        return item;
      })
    );
    setBulkEditorValue((prev) => {
      prev[index as string] = value;
      return prev;
    });
  };

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

  const checkIsCellEdited = (rowKey : string | number , columnKey: string | number , item : DataSourceI) => {
    let currUpdatedItem , originalItem;
    switch (columnKey) {
      case  "Handling Time":
        currUpdatedItem = currData.filter(item => item.key === rowKey)[0][columnKey]
        originalItem  = data.filter(item => item.key === rowKey)[0][columnKey]
        return currUpdatedItem !== originalItem;
      case "Country Of Origin":
        currUpdatedItem = currData.filter(item => item.key === rowKey)[0][columnKey];
        originalItem  = data.filter(item => item.key === rowKey)[0][columnKey]
        return currUpdatedItem !== originalItem;
      case "Standard Price":
        currUpdatedItem = priceEditorData[rowKey]?.updatedValue
        originalItem = priceEditorData[rowKey]?.currValue
        return currUpdatedItem !== originalItem;
    }

    return false
  }

  const columns: columnI[] = [
    {
      key: "Product Details",
      width: 350,
      // align : "center",
      dataIndex: "Product Details",
      title: "Product Details",
      fixed: "left",
      render: (item: string) => (
        <FlexLayout wrap="noWrap" spacing="tight" valign="center">
          <AspectRatio ratio={1} style={{ width: "32px" }}>
            <img src={`${productImage}`} />
          </AspectRatio>
          <Text>{item}</Text>
        </FlexLayout>
      ),
      editor: <div style={{paddingLeft : "1.2rem"}} >Edit this row to update as bulk</div>,
    },
    {
      key: "SKU",
      width: 200,
      // align : "center",
      dataIndex: "SKU",
      title: "SKU",
    },
    {
      key: "Title",
      width: 350,
      align: "left",
      dataIndex: "Title",
      title: "Title",
    },
    {
      key: "Description",
      width: 100,
      // align : "center",
      // dataIndex: "Description",
      title: "Description",
      render: (item: DataI) => (
        <Button halign="center" onClick={() => setDescriptionEditorData(({ open: true, data: item.Description, key: item.key }))} isFullWidth type="textButton">
          View
        </Button>
      )
    },
    {
      key: "Handling Time",
      width: 150,
      // align : "center",
      // dataIndex: "Handling Time",
      title: "Handling Time",
      render: (item: DataI) => (
        <TextField
          prefix={"Days : "}
          type="number"
          min={1}
          value={item["Handling Time"].split(" ")[0]}
          onChange={(newValue) =>
            handelDataChange(`${newValue} days`, item.key, "Handling Time")
          }
        />
      ),
      editor: (
        <TextField
          prefix={"Days : "}
          type="number"
          value={bulkEditorValue["Handling Time"].split(" ")[0]}
          onChange={(newValue) =>
            handelBulkEditChange(`${newValue} days`, "Handling Time")
          }
        />
      ),
    },
    {
      key: "Standard Price",
      width: 400,
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
          onSelectValueChange={(newValue) => {
            setPriceEditorData(prev => {
              const newData = { ...prev }
              Object.keys(newData).map(item => {
                newData[item].selectValue = newValue
              })
              return newData
            })
            setBulkEditorValue(prev => ({ ...prev, selectedValue: newValue }))
          }}
          onTextFieldChange={(newValue) => {
            setPriceEditorData(prev => {
              const newData = { ...prev }
              Object.keys(newData).map(item => {
                newData[item].textFieldValue = newValue
                newData[item].updatedValue = getUpdatedValue(Number(newData[item].currValue.split(" ")[1]), bulkEditorValue.selectedValue, Number(newValue)) ?? ""
              })
              return newData
            })
            setBulkEditorValue(prev => ({ ...prev, textFieldValue: newValue }))
          }}
        />
      ),
    },
    {
      key: "Inventory",
      width: 200,
      // align : "center",
      dataIndex: "Inventory",
      title: "Inventory",
    },
    {
      key: "Product ID",
      width: 200,
      // align : "center",
      dataIndex: "Product ID",
      title: "Product ID",
    },
    {
      key: "Product ID Type",
      width: 200,
      // align : "center",
      dataIndex: "Product ID Type",
      title: "Product ID Type",
    },
    {
      key: "Country Of Origin",
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
          value={bulkEditorValue["Country Of Origin"]}
          onChange={(newValue) =>
            handelBulkEditChange(newValue, "Country Of Origin")
          }
        />
      ),
    },
    {
      key: "Condition",
      width: 200,
      // align : "center",
      dataIndex: "Condition",
      title: "Condition",
    },
    {
      key: "Sale Price",
      width: 200,
      // align : "center",
      dataIndex: "Sale Price",
      title: "Sale Price",
    },
    {
      key: "Sale Start Date",
      width: 200,
      // align : "center",
      dataIndex: "Sale Start Date",
      title: "Sale Start Date",
    },
    {
      key: "Sale End Date",
      width: 200,
      // align : "center",
      dataIndex: "Sale End Date",
      title: "Sale End Date",
    },
    {
      key: "Item Weight",
      width: 200,
      // align : "center",
      dataIndex: "Item Weight",
      title: "Item Weight",
    },
    {
      key: "Item Weight Unit",
      width: 200,
      // align : "center",
      dataIndex: "Item Weight Unit",
      title: "Item Weight Unit",
    },
    {
      key: "Batteries Included",
      width: 200,
      // align : "center",
      dataIndex: "Batteries Included",
      title: "Batteries Included",
    },
    {
      key: "Dangerous Goods Regulations",
      width: 200,
      // align : "center",
      dataIndex: "Dangerous Goods Regulations",
      title: "Dangerous Goods Regulations",
    },
    {
      key: "Fulfillment Centre ID",
      width: 200,
      // align : "center",
      dataIndex: "Fulfillment Centre ID",
      title: "Fulfillment Centre ID",
    },
  ];

  // console.log(priceEditorData , "priceEditorData" , descriptionEditorData , "descriptionEditorData")

  // console.log(currData , "currData" , data , "Original Data")


  useEffect(() => {
    const priceData: PriceEditorState = {}
    data.map((item) => {
      priceData[item.key] = ({
        currValue: item["Standard Price"],
        selectValue: "",
        textFieldValue: "",
        updatedValue: item["Standard Price"]
      })
    })

    setPriceEditorData(priceData)
  }, [data]);

  const [openChoiceList, setOpenChoiceList] = useState(false)
  const [choiceListValue, setChoiceListValue] = useState(["Product Details", "Description", "Handling Time", "Standard Price", "Country Of Origin"])

  const choiceListOptions = useMemo(() => {
    return columns.map(column => ({ label: column.title, value: column.key }))
  }, [columns])

  const currentShowingColumns = useMemo(() => {
    return columns.filter(item => choiceListValue.includes(item.key.toString()))
  }, [choiceListValue, columns])

  const choiceListActivator = <Button type="outlined" disclosure onClick={() => setOpenChoiceList(prev => !prev)}>Customize Columns</Button>

  const scrollX = useMemo(() => {
    let t = 0;
    currentShowingColumns.map(column => {
      t += column.width ?? 0
    })
    return t
  }, [currentShowingColumns])

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
      <Modal
        isOpen={descriptionEditorData.open}
        onClose={() => setDescriptionEditorData({ open: false, data: "", key: "" })}
        heading="Edit Description"
        primaryAction={{
          content: 'Save'
        }}
        secondaryAction={{
          content: "Cancel",
          onClick: () => setDescriptionEditorData({ open: false, data: "", key: "" })
        }}
      >
        <textarea style={{ width: "100%", margin: "auto" }} value={descriptionEditorData.data} onChange={() => true} />
      </Modal>
      <DataTable
        isFixedHeader
        scrollX={scrollX}
        isResizable
        stickyScrollBar
        bulkEditTable
        customClass="inte-dataTable--bulkEdit"
        columns={currentShowingColumns}
        dataSource={currData}
        isCellEdited={checkIsCellEdited}
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
    <div className="price-editor-container">
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
        isDisabled={props.selectValue ? false : true}
        type="number"
        min={0}
        value={props.textFieldValue}
        onChange={(newValue: string) => props.onTextFieldChange(newValue)}
      />
      <Text>{props.updatedValue?.length ? props.updatedValue : props.currValue}</Text>
    </div>
  )
}

export default BulkEditStoryHelper;
