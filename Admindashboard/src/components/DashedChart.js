import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'Page A',
    AvgCSAT: 40,
  },
  {
    name: 'Page B',
    AvgCSAT: 30,
  },
  {
    name: 'Page C',
    AvgCSAT: 29,
  },
  {
    name: 'Page D',
    AvgCSAT: 100,
  },
  {
    name: 'Page E',
    AvgCSAT: 28,
  },
  {
    name: 'Page F',
    AvgCSAT: 80,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <LineChart
        width={260}
        height={230}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: -35,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="none" horizontal={true} vertical={false} strokeOpacity={0.5} />
        <XAxis dataKey="name" tick={{ fontSize: 7 }} strokeOpacity={0} interval={-1} angle={360} textAnchor="end" />
        <YAxis tick={{ fontSize: 10 }} strokeOpacity={0} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="AvgCSAT" stroke="#0096FF" strokeDasharray="5 5" legendType="none" />
      </LineChart>
    );
  }
}
