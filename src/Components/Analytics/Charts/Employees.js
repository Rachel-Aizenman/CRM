import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis  } from 'recharts';


class Employees extends Component {

    render() {
        const data = this.props.data
        return (
            <div className='graph employees'>
                <h4>Top Employees</h4>
                <BarChart width={400} height={200} data={data}>
                    <XAxis dataKey="name" tick={'renderCustomAxisTick'} />
                    <YAxis />
                    <Bar type="monotone" dataKey="uv" barSize={30} fill="#000099"
                        label={'renderCustomBarLabel'} />
                </BarChart>
            </div>
        )
    }

}




export default Employees;