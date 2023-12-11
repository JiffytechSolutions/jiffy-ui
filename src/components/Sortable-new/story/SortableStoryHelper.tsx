import React, { useState } from 'react'
import SortableT, { SortableDataI } from '../SortableT'
import { Card } from '../../Card';
import Text from '../../Text/Text';

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SortableStoryHelper = () => {
    const [sortableData, setSortableData] = useState<SortableDataI[]>(Array(15).fill(0).map((_, index) => ({
        id: index,
        content: <Card
                title={`Card No ${index + 1}`}
                cardType='filled'
            >
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima aliquam ipsam cumque fugit sint unde porro architecto quo nemo.</Text>
        </Card> as React.ReactNode
    })))

    return (
        <div className="aaa">
            <SortableT
            data={sortableData}
            onChange={(newDataArray) => setSortableData(newDataArray)}
            containerStyle={{
                display : "flex",
                gap:"20px",
                flexWrap: "wrap",
                maxHeight:"800px",
                overflow : "auto"
            }}
        />
        <SortableT
            data={sortableData}
            onChange={(newDataArray) => setSortableData(newDataArray)}
            containerStyle={{
                display : "flex",
                gap:"20px",
                flexWrap: "wrap",
                maxHeight:"800px",
                overflow : "auto"
            }}
        />
        </div>
    )
}

export default SortableStoryHelper