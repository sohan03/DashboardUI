import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        month: 'Jan',
        EngagedSessions: 25,
        IncomingSessions: 20,

    },
    {
        month: 'Feb',
        EngagedSessions: 30,
        IncomingSessions: 15,

    },

    {
        month: 'Mar',
        EngagedSessions: 20,
        IncomingSessions: 18,

    },
    {
        month: 'Apr',
        EngagedSessions: 27,
        IncomingSessions: 10,

    },
    {
        month: 'May',
        EngagedSessions: 18,
        IncomingSessions: 8,

    },
    {
        month: 'Jun',
        EngagedSessions: 20,
        IncomingSessions: 56,

    },
    {
        month: 'July',
        EngagedSessions: 28,
        IncomingSessions: 76,

    },
    {
        month: 'Aug',
        EngagedSessions: 18,
        IncomingSessions: 35,

    },
    {
        month: 'Sept',
        EngagedSessions: 39,
        IncomingSessions: 23,

    },
    {
        month: 'Oct',
        EngagedSessions: 19,
        IncomingSessions: 62,

    },
    {
        month: 'Nov',
        EngagedSessions: 19,
        IncomingSessions: 22,

    },
    {
        month: 'Dec',
        EngagedSessions: 29,
        IncomingSessions: 32,

    },

];

export default class Example extends PureComponent {
    render() {
        return (
            <BarChart

                width={1200}
                height={210}
                data={data}
                margin={{
                    top: 15,
                    right: 20,
                    left: -35,
                    bottom: -10,
                }}
                barGap={0} // Remove gap between bars

            // barCategoryGap={0}

            >
                <CartesianGrid strokeDasharray="none" horizontal={true} vertical={false} strokeOpacity={0.5} />
                <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12  }}
                    strokeOpacity={0}
                   
                    // Add inline style to override any conflicting styles
                    
                />

                <YAxis tick={{ fontSize: 12 }} strokeOpacity={0} />
                <Tooltip  
                    cursor={{ fill: 'rgba(206, 206, 206, 0.3)', fontFamily:'Nunito Sans', fontSize:2 }}


                />
                <Legend iconType='circle' verticalAlign="top" align="left" iconSize={8} wrapperStyle={legendStyle} >
                </Legend>
                <Bar dataKey="IncomingSessions" fill="#1E90FF" barSize={10} legendType='none' barGap={0} stackId="a"
                />
                <Bar dataKey="EngagedSessions" fill="#800080" barSize={10} legendType='none' barGap={0} stackId="b"
                />


                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        );
    }
}

const legendStyle = {
    fontSize: '12px', // Adjust the font size as needed
    fontWeight: 600,
    top: -1,
    right: -18,
    // fill: 'black',
};