import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
    { name: 'Positive', value: 200 },
    { name: 'Neutral', value: 500 },
    { name: 'Negative', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const DoughnutChart = () => {
    return (
        <div>
            <div className='grid grid-cols-4 pt-0 gap-20' >

                {data.map((item) => (

                    <p className='cursor-pointer font-semibold' style={{ fontSize: '13px' }}>{item.name}</p>

                ))}

            </div>

            <div className='grid grid-cols-4 mt-[0px] gap-20'>

                {COLORS.map((item) => (

                    <div className="h-[8px] w-[8px]" style={{ backgroundColor: item }}></div>

                ))}

            </div>
            <PieChart width={200} height={200} viewBox="0 0 200 200">
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    startAngle={360}
                    endAngle={0}
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={false}
                    
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default DoughnutChart;
