import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        month: 'Jan',
        // uv: 400,
        sessions: 20,
        
    },
    {
        month: 'Feb',
        // uv: 300,
        sessions: 15,
        
    },

    {
        month: 'Mar',
        // uv: 200,
        sessions: 18,
        
    },
    {
        month: 'Apr',
        // uv: 278,
        sessions: 10,
        
    },
    {
        month: 'May',
        // uv: 189,
        sessions: 8,
        
    },
    {
        month: 'Jun',
        // uv: 200,
        sessions: 1,
        
    },
    {
        month: 'July',
        // uv: 278,
        sessions: 3,
        
    },
    {
        month: 'Aug',
        // uv: 189,
        sessions: 8,
        
    },
    {
        month: 'Sept',
        // uv: 278,
        sessions: 0,
        
    },
    {
        month: 'Oct',
        // uv: 189,
        sessions: 2,
        
    },
    {
        month: 'Nov',
        // uv: 189,
        sessions: 12,
        
    },
    {
        month: 'Dec',
        // uv: 189,
        sessions: 22,
        
    },
    
];

export default class Example extends PureComponent {
    render() {
        return (
            <BarChart
                width={270}
                height={230}
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: -35,
                    bottom: 5,
                }}
                 barGap={10} // Remove gap between bars
                // barCategoryGap={0}
            >
                <CartesianGrid strokeDasharray="none"  horizontal={true} vertical={false} strokeOpacity={0.5} />
                <XAxis dataKey="month" tick={{ fontSize: 7 }} strokeOpacity={0} interval={-1} angle={360} textAnchor="end" />
                <YAxis tick={{ fontSize: 12 }} strokeOpacity={0} />
                <Tooltip />
                <Legend>
                    
                </Legend>
                <Bar dataKey="sessions" fill="#FF5732" barSize={12} legendType='none' />
                
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        );
    }
}
