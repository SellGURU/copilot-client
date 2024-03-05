import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartsProps {
    theme ?:string;
    percentage : number;
}

const data = [
  { name: 'Mon', pv: 2400 },
  { name: 'Tue', pv: 1398 },
  { name: 'Wed', pv: 9800 },
  { name: 'Thu', pv: 3908 },
  { name: 'Fri', pv: 4800 },
  { name: 'Sat', pv: 3800 },
  { name: 'Sun', pv: 4300 },
];

const LineCharts: React.FC<LineChartsProps> = ({percentage}) => {
    let strokeColor;
    if (percentage > 90) {
        strokeColor = `rgba(255, 62, 93)` ;
    } else if (percentage > 65) {
        strokeColor = `rgba(252, 143, 43)` ;
    } else if (percentage > 35) {
        strokeColor = `rgba(135, 63, 239)` ;
    } else {
        strokeColor =`rgba(98, 207, 216, 1)` ;
    }
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={192}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 0" horizontal={false} />
          <XAxis dataKey="name" tick={{ fontSize: 8, fontWeight:400}} interval={0}/>
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke={strokeColor} strokeWidth={3} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineCharts;
