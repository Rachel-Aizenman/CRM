import React, { Component, PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



export default class SalesSince extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw';


    render() {
        const data = this.props.data
        return (
            <div className='graph sales-since'>
                <h4>Sales Since {this.props.date[0]}-{this.props.date[1]}</h4>
            <LineChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Line type="monotone" dataKey="uv" stroke="red" />
            </LineChart>
            </div>
        )
    }
}



