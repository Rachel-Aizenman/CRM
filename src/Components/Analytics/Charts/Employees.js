import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis  } from 'recharts';


class Employees extends Component {

    render() {
        const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 800, amt: 2400 }, { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },  {name: 'Page A', uv: 900, pv: 240, amt: 2400 },  {name: 'Page A', uv: 500, pv: 2400, amt: 2400 }]
        return (
            <div className='graph employees'>
                Employees
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