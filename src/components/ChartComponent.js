import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../modals/data'; // Import the shared data 

const getMinValue = (data, key) => Math.min(...data.map(d =>d[key]));
  const ChartComponent = () => ( 
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data} 
    margin={{ top: 5, right: 30, left: -30, bottom: 5 }}> 
    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
    <XAxis dataKey="name" interval={0} />
    <YAxis domain={[getMinValue(data, 'uv')]} tickCount={20}/>
    <Line type="monotone" dataKey="Systolic" stroke="#E66FD2" dot={{ fill: '#E66FD2', r: 2 }} activeDot={{ r: 2 }} strokeWidth={2} />
    <Line type="monotone" dataKey="Diastolic" stroke="#8C6FE6" dot={{ fill: '#8C6FE6', r: 2 }}  strokeWidth={2}/>
    </LineChart> 
    </ResponsiveContainer> 
    ); 
    export default ChartComponent;