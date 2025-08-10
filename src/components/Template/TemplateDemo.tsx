import React, { useRef, useState } from 'react'
import SideBar from '../SideBar/SideBar'
// import { AlertCircle, HelpCircle } from '../Foundation/Icons/Icons'
import { AlertCircle, Bell, Download, FileText, HelpCircle, Home, Mail, MoreVertical, Phone, RefreshCcw, Search, Settings, ShoppingBag, Tag } from 'react-feather'
import Badge from '../Badge/Badge'
import Topbar from '../TopBar/TopBar'
import PageTitle from '../PageTitle/PageTitle'

import Card from '../Card/Card'

import Table from '../Table/Table'

import Button from '../Button/Button'
import TextField from '../Input/TextField/TextField'

import Avatar from '../Avatar/Avatar'

import './style.css';
import HorizontalFlex from '../HorizontalFlex/HorizontalFlex'
import Thumbnail from '../Thumbnail/Thumbnail'
import FlexItem from '../FlexItem/FlexItem'
import VerticalFlex from '../VerticalFlex/VerticalFlex'
import TextStyle from '../TextStyle/TextStyle'
import AppWrapper from '../AppWrapper/AppWrapper'
import Indicator from '../Indicator/Indicator'
import SideSheet from '../SideSheet/SideSheet'
import { Actionlist } from '../Actionlist/Actionlist'
const TemplateDemo = () => {
    const [sortedColumn, setSortedColumn] = useState<any>({
        index: 1,
        direction: "ascending",
    });
    const orders = [
        {
            id: "1020",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={''} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 4:34pm",
            customer: "Jaydon Stanton",
            total: "$969.44",
            paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag size='Medium'>Unfulfilled</Tag>,
        },
        {
            id: "1019",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={""} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 3:46pm",
            customer: "Ruben Westerfelt",
            total: "$701.19",
            paymentStatus: <Badge emphasis="Subtile" color="Negative" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag size='Medium'>Unfulfilled</Tag>,
        },
        {
            id: "1018",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={''} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 3.44pm",
            customer: "Leo Carder",
            total: "$798.24",
            paymentStatus: <Badge emphasis="Subtile" color="Notice" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag size='Medium'>Unfulfilled</Tag>,
        },
        {
            id: "1018",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={''} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 3.44pm",
            customer: "Leo Carder",
            total: "$798.24",
            paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag size='Medium'>Unfulfilled</Tag>,
        },
        {
            id: "1020",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={''} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 4:34pm",
            customer: "Jaydon Stanton",
            total: "$969.44",
            paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag>Unfulfilled</Tag>,
        },
        {
            id: "1019",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={""} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 3:46pm",
            customer: "Ruben Westerfelt",
            total: "$701.19",
            paymentStatus: <Badge emphasis="Subtile" color="Negative" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag size='Medium'>Unfulfilled</Tag>,
        },
        {
            id: "1018",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={''} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 3.44pm",
            customer: "Leo Carder",
            total: "$798.24",
            paymentStatus: <Badge emphasis="Subtile" color="Notice" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag size='Medium'>Unfulfilled</Tag>,
        },
        {
            id: "1018",
            order: <HorizontalFlex gap={6} blockAlign={{ lg: "center", md: "center", sm: "center", xl: "center" }}>
                <Thumbnail size='Small' source={''} alt={''} />
                <VerticalFlex gap={2}>
                    <FlexItem>
                        <TextStyle as='h6' type='MdHeading' fontWeight='Bold'>Sleek Frozen Ball</TextStyle>
                    </FlexItem>
                    <FlexItem>
                        <TextStyle as='h6' type='SmBody' fontWeight='Regular' textColor='Secondary'>Electronics</TextStyle>
                    </FlexItem>
                </VerticalFlex>
            </HorizontalFlex>,
            date: "Jul 20 at 3.44pm",
            customer: "Leo Carder",
            total: "$798.24",
            paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
            fulfillmentStatus: <Tag size='Medium'>Unfulfilled</Tag>,
        },

    ];
    const [isOpen, setIsOpen] = useState(false);
    const [active1, setActive1] = useState(false);
    const btnRef1 = useRef<any>(null);
    const columnAction = <Actionlist
        onClose={() => setActive1(false)}
        activator={
            <Button ref={btnRef1} icon={<MoreVertical size={18} />} variant="Tertiary" onClick={() => {
                setActive1(!active1)
            }} children='' />
        }
        open={active1}
        options={[
            {
                title: "title 1",
                items: [
                    {
                        content: "Action 1 1",
                        onClick: () => alert("Hello 1 1"),
                        prefixIcon: <Download size={15} />,
                        description: "Lore ipsum",
                        suffixIcon: <Download size={15} />,
                        destructive: true,
                    },
                    {
                        content: "Action 1 2",
                        onClick: () => alert("Hello 1 2"),
                        prefixIcon: <FileText size={15} />
                    },
                    {
                        content: "Action 1 3",
                        onClick: () => alert("Hello 1 3"),
                        prefixIcon: <RefreshCcw size={15} />
                    },
                ],
            },
            {
                title: "title 2",
                items: [
                    {
                        content: "Action 2 1",
                        onClick: () => alert("Hello 2 1"),
                    },
                    {
                        content: "Action 2 2",
                        onClick: () => alert("Hello 2 2"),
                    },
                    {
                        content: "Action 2 3",
                        onClick: () => alert("Hello 2 3"),
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
            },
            {
                title: "title 4",
                items: [
                    {
                        content: "Action 4 1",
                        onClick: () => alert("Hello 2 1"),
                    },
                    {
                        content: "Action 4 2",
                        onClick: () => alert("Hello 2 2"),
                    },
                    {
                        content: "Action 4 3",
                        onClick: () => alert("Hello 2 3"),
                    },
                ],
            },
        ]}
    />

    const tableRow = orders.map(
        (
            { id, order, date, customer, total, paymentStatus, fulfillmentStatus },
            index
        ) => (
            <Table.Row key={id} id={id}>
                <Table.Cell>
                    {order}
                </Table.Cell>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{customer}</Table.Cell>
                <Table.Cell>
                    {total}
                </Table.Cell>
                <Table.Cell>{paymentStatus}</Table.Cell>
                <Table.Cell>{fulfillmentStatus}</Table.Cell>
                <Table.Cell>{columnAction}</Table.Cell>
            </Table.Row>
        )
    );
    const handleColumnSort = (index: any, direction: any) => {
        setSortedColumn({ index: index, direction: direction });
    };

    const primaryAction1 = {
        isLoading: false,
        label: "Proceed",
        isDisabled: false,
        onClick: () => {
            alert("Conngratulations You proceeded :)");
        },
    };
    const secondoryAction1 = {
        isLoading: false,
        label: "Cancel",
        onClick: () => {
            alert("Conngratulations You proceeded :)");
        },
    };
    const [value, setValue] = useState("");
    return (
        <>        <AppWrapper sideBar=
            {
                <SideBar
                    logo={<svg width="153" height="30" viewBox="0 0 153 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_29_19)">
                            <path d="M55.25 10.4336H58.0723V21.6348C58.0723 22.416 57.929 23.0768 57.6426 23.6172C57.3561 24.1576 56.9427 24.5677 56.4023 24.8477C55.862 25.1276 55.2077 25.2676 54.4395 25.2676C54.1986 25.2676 53.9642 25.2546 53.7363 25.2285C53.502 25.2025 53.2611 25.1602 53.0137 25.1016L53.0234 22.9434C53.1797 22.9694 53.3327 22.9889 53.4824 23.002C53.6257 23.0215 53.7721 23.0312 53.9219 23.0312C54.2148 23.0312 54.459 22.9824 54.6543 22.8848C54.8496 22.7871 54.9961 22.6341 55.0938 22.4258C55.1979 22.224 55.25 21.9603 55.25 21.6348V10.4336ZM55.0254 7.67969C55.0254 7.26953 55.1686 6.93099 55.4551 6.66406C55.748 6.39714 56.1322 6.26367 56.6074 6.26367C57.0892 6.26367 57.4733 6.39714 57.7598 6.66406C58.0462 6.93099 58.1895 7.26953 58.1895 7.67969C58.1895 8.08984 58.0462 8.42839 57.7598 8.69531C57.4733 8.96224 57.0892 9.0957 56.6074 9.0957C56.1322 9.0957 55.748 8.96224 55.4551 8.69531C55.1686 8.42839 55.0254 8.08984 55.0254 7.67969ZM63.2773 10.4336V21H60.4551V10.4336H63.2773ZM60.2793 7.67969C60.2793 7.26953 60.4225 6.93099 60.709 6.66406C60.9954 6.39714 61.3796 6.26367 61.8613 6.26367C62.3366 6.26367 62.7174 6.39714 63.0039 6.66406C63.2969 6.93099 63.4434 7.26953 63.4434 7.67969C63.4434 8.08984 63.2969 8.42839 63.0039 8.69531C62.7174 8.96224 62.3366 9.0957 61.8613 9.0957C61.3796 9.0957 60.9954 8.96224 60.709 8.69531C60.4225 8.42839 60.2793 8.08984 60.2793 7.67969ZM69.1855 21H66.3535V9.49609C66.3535 8.69531 66.5098 8.02148 66.8223 7.47461C67.1413 6.92122 67.5872 6.50456 68.1602 6.22461C68.7396 5.93815 69.4264 5.79492 70.2207 5.79492C70.4811 5.79492 70.7318 5.81445 70.9727 5.85352C71.2135 5.88607 71.4479 5.92839 71.6758 5.98047L71.6465 8.09961C71.5228 8.06706 71.3926 8.04427 71.2559 8.03125C71.1191 8.01823 70.9596 8.01172 70.7773 8.01172C70.4388 8.01172 70.1491 8.07031 69.9082 8.1875C69.6738 8.29818 69.4948 8.46419 69.3711 8.68555C69.2474 8.9069 69.1855 9.17708 69.1855 9.49609V21ZM71.2949 10.4336V12.4258H64.7812V10.4336H71.2949ZM76.3535 21H73.5215V9.49609C73.5215 8.69531 73.6777 8.02148 73.9902 7.47461C74.3092 6.92122 74.7552 6.50456 75.3281 6.22461C75.9076 5.93815 76.5944 5.79492 77.3887 5.79492C77.6491 5.79492 77.8997 5.81445 78.1406 5.85352C78.3815 5.88607 78.6159 5.92839 78.8438 5.98047L78.8145 8.09961C78.6908 8.06706 78.5605 8.04427 78.4238 8.03125C78.2871 8.01823 78.1276 8.01172 77.9453 8.01172C77.6068 8.01172 77.3171 8.07031 77.0762 8.1875C76.8418 8.29818 76.6628 8.46419 76.5391 8.68555C76.4154 8.9069 76.3535 9.17708 76.3535 9.49609V21ZM78.4629 10.4336V12.4258H71.9492V10.4336H78.4629ZM83.0723 19.8086L85.875 10.4336H88.8926L84.6445 22.5918C84.5534 22.8587 84.4297 23.1452 84.2734 23.4512C84.1237 23.7572 83.9186 24.0469 83.6582 24.3203C83.4043 24.6003 83.082 24.8281 82.6914 25.0039C82.3073 25.1797 81.8353 25.2676 81.2754 25.2676C81.0085 25.2676 80.7904 25.2513 80.6211 25.2188C80.4518 25.1862 80.25 25.1406 80.0156 25.082V23.0215C80.0872 23.0215 80.1621 23.0215 80.2402 23.0215C80.3184 23.028 80.3932 23.0312 80.4648 23.0312C80.8359 23.0312 81.1387 22.9889 81.373 22.9043C81.6074 22.8197 81.7962 22.6895 81.9395 22.5137C82.0827 22.3444 82.1966 22.123 82.2812 21.8496L83.0723 19.8086ZM81.9004 10.4336L84.1953 18.0898L84.5957 21.0684L82.6816 21.2734L78.8828 10.4336H81.9004Z" fill="#3B3B3B" />
                            <path d="M94.5566 21H91.4609L91.4805 18.7148H94.5566C95.3249 18.7148 95.9727 18.5423 96.5 18.1973C97.0273 17.8457 97.4245 17.3346 97.6914 16.6641C97.9648 15.9935 98.1016 15.1829 98.1016 14.2324V13.5391C98.1016 12.8099 98.0234 12.1686 97.8672 11.6152C97.7174 11.0618 97.4928 10.5964 97.1934 10.2188C96.8939 9.84115 96.526 9.55794 96.0898 9.36914C95.6536 9.17383 95.1523 9.07617 94.5859 9.07617H91.4023V6.78125H94.5859C95.5365 6.78125 96.4056 6.94401 97.1934 7.26953C97.9876 7.58854 98.6745 8.04753 99.2539 8.64648C99.8333 9.24544 100.279 9.96159 100.592 10.7949C100.911 11.6217 101.07 12.543 101.07 13.5586V14.2324C101.07 15.2415 100.911 16.1628 100.592 16.9961C100.279 17.8294 99.8333 18.5456 99.2539 19.1445C98.681 19.737 97.9941 20.196 97.1934 20.5215C96.3991 20.8405 95.5202 21 94.5566 21ZM93.1211 6.78125V21H90.1914V6.78125H93.1211ZM107.887 21.1953C107.066 21.1953 106.331 21.0651 105.68 20.8047C105.029 20.5378 104.475 20.1699 104.02 19.7012C103.57 19.2324 103.225 18.6888 102.984 18.0703C102.743 17.4453 102.623 16.7812 102.623 16.0781V15.6875C102.623 14.8867 102.737 14.1543 102.965 13.4902C103.193 12.8262 103.518 12.25 103.941 11.7617C104.371 11.2734 104.892 10.8991 105.504 10.6387C106.116 10.3717 106.806 10.2383 107.574 10.2383C108.323 10.2383 108.987 10.362 109.566 10.6094C110.146 10.8568 110.631 11.2083 111.021 11.6641C111.419 12.1198 111.718 12.6667 111.92 13.3047C112.122 13.9362 112.223 14.6393 112.223 15.4141V16.5859H103.824V14.7109H109.459V14.4961C109.459 14.1055 109.387 13.7572 109.244 13.4512C109.107 13.1387 108.899 12.8913 108.619 12.709C108.339 12.5267 107.981 12.4355 107.545 12.4355C107.174 12.4355 106.855 12.5169 106.588 12.6797C106.321 12.8424 106.103 13.0703 105.934 13.3633C105.771 13.6562 105.647 14.0013 105.562 14.3984C105.484 14.7891 105.445 15.2188 105.445 15.6875V16.0781C105.445 16.5013 105.504 16.8919 105.621 17.25C105.745 17.6081 105.917 17.9173 106.139 18.1777C106.367 18.4382 106.64 18.64 106.959 18.7832C107.285 18.9264 107.652 18.998 108.062 18.998C108.57 18.998 109.042 18.9004 109.479 18.7051C109.921 18.5033 110.302 18.2005 110.621 17.7969L111.988 19.2812C111.767 19.6003 111.464 19.9062 111.08 20.1992C110.702 20.4922 110.247 20.7331 109.713 20.9219C109.179 21.1042 108.57 21.1953 107.887 21.1953ZM119.537 18.0801C119.537 17.8783 119.479 17.696 119.361 17.5332C119.244 17.3704 119.026 17.2207 118.707 17.084C118.395 16.9408 117.942 16.8105 117.35 16.6934C116.816 16.5762 116.318 16.4297 115.855 16.2539C115.4 16.0716 115.003 15.8535 114.664 15.5996C114.332 15.3457 114.072 15.0462 113.883 14.7012C113.694 14.3496 113.6 13.9492 113.6 13.5C113.6 13.0573 113.694 12.6406 113.883 12.25C114.078 11.8594 114.355 11.5143 114.713 11.2148C115.077 10.9089 115.52 10.6712 116.041 10.502C116.568 10.3262 117.161 10.2383 117.818 10.2383C118.736 10.2383 119.524 10.3848 120.182 10.6777C120.846 10.9707 121.354 11.3743 121.705 11.8887C122.063 12.3965 122.242 12.9759 122.242 13.627H119.43C119.43 13.3535 119.371 13.1094 119.254 12.8945C119.143 12.6732 118.967 12.5007 118.727 12.377C118.492 12.2467 118.186 12.1816 117.809 12.1816C117.496 12.1816 117.226 12.237 116.998 12.3477C116.77 12.4518 116.594 12.5951 116.471 12.7773C116.354 12.9531 116.295 13.1484 116.295 13.3633C116.295 13.526 116.327 13.6725 116.393 13.8027C116.464 13.9264 116.578 14.0404 116.734 14.1445C116.891 14.2487 117.092 14.3464 117.34 14.4375C117.594 14.5221 117.906 14.6003 118.277 14.6719C119.039 14.8281 119.719 15.0332 120.318 15.2871C120.917 15.5345 121.393 15.873 121.744 16.3027C122.096 16.7259 122.271 17.2826 122.271 17.9727C122.271 18.4414 122.167 18.8711 121.959 19.2617C121.751 19.6523 121.451 19.9941 121.061 20.2871C120.67 20.5736 120.201 20.7982 119.654 20.9609C119.114 21.1172 118.505 21.1953 117.828 21.1953C116.845 21.1953 116.012 21.0195 115.328 20.668C114.651 20.3164 114.137 19.8704 113.785 19.3301C113.44 18.7832 113.268 18.2233 113.268 17.6504H115.934C115.947 18.0345 116.044 18.3438 116.227 18.5781C116.415 18.8125 116.653 18.9818 116.939 19.0859C117.232 19.1901 117.548 19.2422 117.887 19.2422C118.251 19.2422 118.554 19.1934 118.795 19.0957C119.036 18.9915 119.218 18.8548 119.342 18.6855C119.472 18.5098 119.537 18.3079 119.537 18.0801ZM127.066 10.4336V21H124.244V10.4336H127.066ZM124.068 7.67969C124.068 7.26953 124.212 6.93099 124.498 6.66406C124.785 6.39714 125.169 6.26367 125.65 6.26367C126.126 6.26367 126.507 6.39714 126.793 6.66406C127.086 6.93099 127.232 7.26953 127.232 7.67969C127.232 8.08984 127.086 8.42839 126.793 8.69531C126.507 8.96224 126.126 9.0957 125.65 9.0957C125.169 9.0957 124.785 8.96224 124.498 8.69531C124.212 8.42839 124.068 8.08984 124.068 7.67969ZM136.08 10.4336H138.629V20.6484C138.629 21.612 138.414 22.429 137.984 23.0996C137.561 23.7767 136.969 24.2878 136.207 24.6328C135.445 24.9844 134.56 25.1602 133.551 25.1602C133.108 25.1602 132.639 25.1016 132.145 24.9844C131.656 24.8672 131.188 24.6849 130.738 24.4375C130.296 24.1901 129.924 23.8776 129.625 23.5L130.865 21.8398C131.191 22.2174 131.568 22.5104 131.998 22.7188C132.428 22.9336 132.903 23.041 133.424 23.041C133.932 23.041 134.361 22.9466 134.713 22.7578C135.064 22.5755 135.335 22.3053 135.523 21.9473C135.712 21.5957 135.807 21.1693 135.807 20.668V12.875L136.08 10.4336ZM128.971 15.8438V15.6387C128.971 14.8314 129.068 14.099 129.264 13.4414C129.465 12.7773 129.749 12.2077 130.113 11.7324C130.484 11.2572 130.934 10.8893 131.461 10.6289C131.988 10.3685 132.584 10.2383 133.248 10.2383C133.951 10.2383 134.54 10.3685 135.016 10.6289C135.491 10.8893 135.882 11.2604 136.188 11.7422C136.493 12.2174 136.731 12.7806 136.9 13.4316C137.076 14.0762 137.213 14.7826 137.311 15.5508V16C137.213 16.7357 137.066 17.4193 136.871 18.0508C136.676 18.6823 136.419 19.2357 136.1 19.7109C135.781 20.1797 135.383 20.5443 134.908 20.8047C134.439 21.0651 133.88 21.1953 133.229 21.1953C132.577 21.1953 131.988 21.0618 131.461 20.7949C130.94 20.528 130.494 20.1536 130.123 19.6719C129.752 19.1901 129.465 18.6237 129.264 17.9727C129.068 17.3216 128.971 16.612 128.971 15.8438ZM131.783 15.6387V15.8438C131.783 16.2799 131.826 16.6868 131.91 17.0645C131.995 17.4421 132.125 17.7773 132.301 18.0703C132.483 18.3568 132.708 18.5814 132.975 18.7441C133.248 18.9004 133.57 18.9785 133.941 18.9785C134.456 18.9785 134.876 18.8711 135.201 18.6562C135.527 18.4349 135.771 18.1322 135.934 17.748C136.096 17.3639 136.191 16.9212 136.217 16.4199V15.1406C136.204 14.7305 136.148 14.3626 136.051 14.0371C135.953 13.7051 135.816 13.4219 135.641 13.1875C135.465 12.9531 135.237 12.7708 134.957 12.6406C134.677 12.5104 134.345 12.4453 133.961 12.4453C133.59 12.4453 133.268 12.5299 132.994 12.6992C132.727 12.862 132.503 13.0866 132.32 13.373C132.145 13.6595 132.011 13.998 131.92 14.3887C131.829 14.7728 131.783 15.1895 131.783 15.6387ZM143.57 12.6895V21H140.758V10.4336H143.395L143.57 12.6895ZM143.16 15.3457H142.398C142.398 14.5645 142.499 13.8613 142.701 13.2363C142.903 12.6048 143.186 12.0677 143.551 11.625C143.915 11.1758 144.348 10.834 144.85 10.5996C145.357 10.3587 145.924 10.2383 146.549 10.2383C147.044 10.2383 147.496 10.3099 147.906 10.4531C148.316 10.5964 148.668 10.8242 148.961 11.1367C149.26 11.4492 149.488 11.8626 149.645 12.377C149.807 12.8913 149.889 13.5195 149.889 14.2617V21H147.057V14.252C147.057 13.7832 146.992 13.4186 146.861 13.1582C146.731 12.8978 146.539 12.7155 146.285 12.6113C146.038 12.5007 145.732 12.4453 145.367 12.4453C144.99 12.4453 144.661 12.5202 144.381 12.6699C144.107 12.8197 143.88 13.028 143.697 13.2949C143.521 13.5553 143.388 13.8613 143.297 14.2129C143.206 14.5645 143.16 14.9421 143.16 15.3457Z" fill="#305EFF" />
                            <rect x="11.9692" y="4.68726" width="10.212" height="23.2321" rx="5.10598" transform="rotate(30 11.9692 4.68726)" fill="#3B3B3B" />
                            <rect x="28.8533" y="-0.307922" width="10.212" height="29" rx="5.10598" transform="rotate(30 28.8533 -0.307922)" fill="#3B3B3B" />
                            <rect x="33" y="16" width="11" height="11" rx="5.5" fill="#305EFF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_29_19">
                                <rect width="153" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    }
                    onChange={() => { }}>
                    <SideBar.Item menu={[
                        {
                            id: "home",
                            label: "Home",
                            path: "/",
                            icon: <Home size="16" />,
                            badge: <Badge color="Positive" children="New" size="Medium" />,
                        },
                        {
                            id: "proList",
                            label: "Product List",
                            path: "/productList",
                            icon: <ShoppingBag size="16" />,
                            children: [
                                {
                                    id: "pro1",
                                    label: "pro1",
                                    path: "/product1",
                                    //   badge: <Badge color="Positive" label="54" />,
                                },
                                {
                                    id: "pro2",
                                    label: "pro2",
                                    path: "/product2",
                                },
                                {
                                    id: "pro3",
                                    label: "pro3",
                                    path: "/product3",
                                },
                            ],
                        },
                        {
                            id: "setting",
                            label: "Setting",
                            path: "/setting",
                            icon: 'r',
                            badge: <Badge color={"Positive"} emphasis="Intense" children="10" size="Medium" />
                        },
                        {
                            id: "help",
                            label: "Help",
                            path: "/help",
                            icon: <HelpCircle size="16" />,
                        },
                        {
                            id: "faq",
                            label: "FAQ",
                            path: "/faq",
                            icon: <AlertCircle size="16" />,
                        },
                    ]} />
                    <SideBar.Item menu={[
                        {
                            id: "get",
                            label: "Get In Touch",
                            path: "/getInTouch",
                            icon: <Home size="16" />,
                            //   badge: <Badge color="Positive" label="5" />,
                            children: [
                                {
                                    id: "child1",
                                    label: "child1",
                                    path: "/product1",
                                    //   badge: <Badge color="Positive" label="54" />,
                                },
                                {
                                    id: "child2",
                                    label: "child2",
                                    path: "/product2",
                                },
                                {
                                    id: "child3",
                                    label: "child3",
                                    path: "/product3",
                                },
                            ],
                        },
                        {
                            id: "mobile",
                            label: "Contact Us",
                            path: "/contactUs",
                            icon: <Phone size="16" />,
                        },
                    ]} />
                </SideBar>
            } topBar=
            {
            <Topbar
                connectRight={
                    <HorizontalFlex gap={6}>
                        <Avatar
                            onClick={() => { setIsOpen(true) }}
                            icon={<Mail />}
                            indicator={<Indicator color={'Primary'} />}
                            size={"Medium"}
                            label={"Users"}
                        />
                        <Avatar
                            onClick={() => { setIsOpen(true) }}
                            icon={<Settings />}
                            indicator={<Indicator color={'Primary'} />}
                            size={"Medium"}

                            label={"Users"}
                        />
                        <Avatar
                            onClick={() => { setIsOpen(true) }}
                            icon={<Bell />}
                            indicator={<Indicator color={'Primary'} />}
                            size={"Medium"}

                            label={"Users"}
                        />
                        <Avatar
                            onClick={() => { setIsOpen(true) }}
                            icon={<Bell />}
                            indicator={<Indicator color={'Primary'} />}
                            size={"Medium"}
                            srcIco="https://t3.ftcdn.net/jpg/02/33/46/24/240_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
                            label={"Users"}
                            shape='Circle'
                        />
                        <SideSheet isOpen={isOpen} onDismiss={() => setIsOpen(false)} title={"Side sheet"}
                            footer={
                                <HorizontalFlex gap={18} align={{
                                    sm: "center",
                                    md: "center",
                                    lg: "spaceAround",
                                }}>
                                    <Button color="Primary" children="Proceed" />
                                    <Button color="Primary" variant="Secondry" children="cancel" />
                                </HorizontalFlex>
                            }
                        >
                            <TextStyle as="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type
                                specimen book. Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </TextStyle>
                        </SideSheet>
                    </HorizontalFlex>
                }
                connectLeft={
                    <TextField
                        size='Small'
                        type="text"
                        label=""
                        prefix={<Search size={18} />}
                        placeholder="Prefix with Text"
                        onChange={(e) => setValue(e)}
                        value={value}
                    // prefix={"Weight"}
                    />
                }
            />} content={
                <div className='app_content_wrapper'>
                    <PageTitle
                        badge={
                            {
                                children: "Success",
                                color: "Positive",
                                size: "Medium",
                                emphasis: "Subtile",
                                type: "None"
                            }
                        }
                        primaryAction={{
                            children: "test",
                            onClick: () => { alert('gggg') }
                        }}
                        secondaryAction={secondoryAction1}
                        title="Page title will go here.." description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing" />
                    <HorizontalFlex gap={16}>
                        <FlexItem itemWidth={{ sm: "12", lg: "12" }}>
                            <>
                                <Card

                                    headerActions={[
                                        {
                                            items: [
                                                {
                                                    content: "Refresh",
                                                    onClick: () => {
                                                        alert("Action1");
                                                    },
                                                    prefixIcon: <RefreshCcw size={15} />,
                                                },
                                                {
                                                    content: "Export",
                                                    onClick: () => {
                                                        alert("Action2");
                                                    },
                                                    prefixIcon: <FileText size={15} />,
                                                },
                                                {
                                                    content: "Download",
                                                    onClick: () => {
                                                        alert("Action3");
                                                    },
                                                    prefixIcon: <Download size={15} />,
                                                },
                                            ],
                                        },
                                    ]}
                                    type={'Shadow'} headerTitle="Card title" headerSubTitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing">
                                   sdfsdfsdf
                                    {/* <Table
                                        headings={[
                                            { title: "Order" },
                                            { title: "Date" },
                                            { title: "Customer" },
                                            { title: "Total" },
                                            { title: "Payment status" },
                                            { title: "Fulfillment status" },
                                        ]}
                                        sortDirection={sortedColumn["direction"]}
                                        sortColumnIndex={sortedColumn["index"]}
                                        sortable={[true, true, false, false, true, true]}
                                        onSort={handleColumnSort}
                                    >
                                        {tableRow}
                                    </Table> */}
                                </Card>
                                {/* <Table
                                    selectable
                                    onRowSelection={() => { }}
                                    headings={[
                                        { title: "Order" },
                                        { title: "Date" },
                                        { title: "Customer" },
                                        { title: "Total" },
                                        { title: "Payment status" },
                                        { title: "Fulfillment status" },
                                        { title: "Actions" },
                                    ]}
                                    sortDirection={sortedColumn["direction"]}
                                    sortColumnIndex={sortedColumn["index"]}
                                    // sortable={[true, true, false, false, true, true]}
                                    onSort={handleColumnSort}
                                >
                                    {tableRow}
                                </Table> */}
                            </>
                        </FlexItem>
                    </HorizontalFlex>
                </div>
            } />
        </>

    )
}

export default TemplateDemo
