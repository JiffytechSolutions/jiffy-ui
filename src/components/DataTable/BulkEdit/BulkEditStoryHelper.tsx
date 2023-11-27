import React, { useEffect, useMemo, useState } from 'react'
import { Select, TextField } from '../../Form'
import { Card } from '../../Card';
import DataTable, { bulkEditRowI, columnI } from '../DataTable';
import Button from '../../Button/Button';
import './BulkEdit.css'
import data, { DataI } from './Data';
import { FlexChild, FlexLayout } from '../../FlexLayout';
import productImage from "./asset/Image.png"
import AspectRatio from '../../AspectRatio/AspectRatio';
import Text from '../../Text/Text';

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
    [key : string] : boolean | "indeterminate"
}

type simpleObj = { [key : string]:  string }

const BulkEditStoryHelper = ({...rest}) => {

    const [selectedRowKey , setSelectedRowKey] = useState<selectedRowKey>({})

    const [currData , setCurrData] = useState(data)

    const [bulkEditorValue , setBulkEditorValue] = useState<simpleObj>({
      "Handling Time" : "",
      "Country Of Origin" : "",
    })

    const originCountries = [
      {
        label : "Japan",
        value : "Japan"
      },
      {
        label : "USA",
        value : "USA"
      },
      {
        label : "South Korea",
        value : "South Korea"
      },
      {
        label : "Taiwan",
        value : "Taiwan"
      },
      {
        label : "China",
        value : "China"
      }
    ]

    const changePairValue = (item : DataI , index:string , value : string) => {
      item[index as keyof DataI] = value
      return item
    }

    const handelDataChange = (value:string , key : string , index : string) => {
      setCurrData(prev => prev.map(item => item.key === key ? changePairValue(item , index , value) : item))
    }

    const handelBulkEditChange = (value : string , index : string) => {
      setCurrData(prev => prev.map(item => {
        // if(selectedRowKey[item.key])  
        item[index as keyof DataI] = value
        return item
      }))
      setBulkEditorValue(prev => {
        prev[index as string] = value
        return prev
      })
    }

    const columns : columnI[] = [
        {
            key: "1",
            width : 350,
            // align : "center",
            dataIndex: "Product Details",
            title: "Product Details",
            fixed : "left",
            render : (item : string) => <FlexLayout wrap='noWrap' spacing='tight'>
                <AspectRatio ratio={1} style={{width : "32px"}}><img src={`${productImage}`} /></AspectRatio>
                <Text>{item}</Text>
            </FlexLayout>
          },
          {
            key: "2",
            width : 200,
            // align : "center",
            dataIndex: "SKU",
            title: "SKU",
          },
          {
            key: "3",
            width : 350,
            align : "left",
            dataIndex: "Title",
            title: "Title",
          },
          {
            key: "4",
            width : 150,
            // align : "center",
            dataIndex: "Description",
            title: "Description",
            render : (item : string) => <Button halign='center' isFullWidth type='textButton'>View</Button>
          },
          {
            key: "5",
            width : 200,
            // align : "center",
            // dataIndex: "Handling Time",
            title: "Handling Time",
            render : ((item : DataI) => 
              <TextField min={1} value={item['Handling Time']} onChange={(newValue) => handelDataChange(newValue , item.key , "Handling Time")}/>
            )
          },
          {
            key: "6",
            width : 200,
            // align : "center",
            dataIndex: "Standard Price",
            title: "Standard Price",
          },
          {
            key: "7",
            width : 200,
            // align : "center",
            dataIndex: "Inventory",
            title: "Inventory",
          },
          {
            key: "8",
            width : 200,
            // align : "center",
            dataIndex: "Product ID",
            title: "Product ID",
          },
          {
            key: "9",
            width : 200,
            // align : "center",
            dataIndex: "Product ID Type",
            title: "Product ID Type",
          },
          {
            key: "10",
            width : 200,
            // align : "center",
            // dataIndex: "Country Of Origin",
            title: "Country Of Origin",
            render :(item:DataI) => <Select options={originCountries} value={item['Country Of Origin']} onChange={(newValue:string) => handelDataChange(newValue ,item.key , "Country Of Origin" )} />,
          },
          {
            key: "11",
            width : 200,
            // align : "center",
            dataIndex: "Condition",
            title: "Condition",
          },
          {
            key: "12",
            width : 200,
            // align : "center",
            dataIndex: "Sale Price",
            title: "Sale Price",
          },
          {
            key: "13",
            width : 200,
            // align : "center",
            dataIndex: "Sale Start Date",
            title: "Sale Start Date",
          },
          {
            key: "14",
            width : 200,
            // align : "center",
            dataIndex: "Sale End Date",
            title: "Sale End Date",
          },
          {
            key: "15",
            width : 200,
            // align : "center",
            dataIndex: "Item Weight",
            title: "Item Weight",
          },
          {
            key: "16",
            width : 200,
            // align : "center",
            dataIndex: "Item Weight Unit",
            title: "Item Weight Unit",
          },
          {
            key: "17",
            width : 200,
            // align : "center",
            dataIndex: "Batteries Included",
            title: "Batteries Included",
          },
          {
            key: "18",
            width : 200,
            // align : "center",
            dataIndex: "Dangerous Goods Regulations",
            title: "Dangerous Goods Regulations",
          },
          {
            key: "19",
            width : 200,
            // align : "center",
            dataIndex: "Fulfillment Centre ID",
            title: "Fulfillment Centre ID",
          },
    ]

    const handelSelectChange = (newValue: selectedRowKey) => {
        console.log(newValue)
        setSelectedRowKey(newValue)
    }

    useEffect(() => {
        const keysInData : selectedRowKey= {}
        data.map(item => {
            keysInData[item.key] = false
        })
        setSelectedRowKey(keysInData)
    },[])

    const bulkEditRow : bulkEditRowI[] = [
        {
            // colSpan : 2,
            editior : "Edit this row to update selected products",
            key : "Product",
            fixed : 'left'
        },
        {
          colSpan : 2,
          editior : "",
          key : "Product1",
        },
        {
          editior : <Button type='outlined' halign='center' isFullWidth>Edit</Button>,
          key : "Product2",
        },
        {
          editior : <TextField value={bulkEditorValue['Handling Time']} onChange={((newValue) => handelBulkEditChange(newValue , "Handling Time"))} />,
          key : "Product3",
        },
        {
          // colSpan : 2,
          editior : "",
          key : "Product4",
        },
        {
          colSpan : 3,
          editior : "",
          key : "Product5",
        },
        {
          // colSpan : 2,
          editior : <Select options={originCountries} value={bulkEditorValue["Origin Of Country"]}  onChange={(newValue) => handelBulkEditChange(newValue , "Country Of Origin")}/>,
          key : "Product1",
        },
        // {
        //     colSpan : 18,
        //     key : "Product2",
        //     editior : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio doloremque voluptate, natus cumque deleniti eius nihil explicabo asperiores voluptatem?"
        // }
    ]


    return <DataTable 
        hasFixedHeader
        bulkEditRow={bulkEditRow}
        // rowSelection={{
        //     selectedRowKeys : selectedRowKey,
        //     onSelectChange : handelSelectChange
        // }}
        customClass='inte-dataTable--bulkEdit'
        columns={columns}
        dataSource={currData}

    />
}

export default BulkEditStoryHelper
