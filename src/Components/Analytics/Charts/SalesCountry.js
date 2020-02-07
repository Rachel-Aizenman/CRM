import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis  } from 'recharts';


class SalesCountry extends Component {

    render() {
        const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 800, amt: 2400 }, { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },  {name: 'Page A', uv: 900, pv: 240, amt: 2400 },  {name: 'Page A', uv: 500, pv: 2400, amt: 2400 }]
        return (
            <div className='graph sales-country'>
                Sales By Country
                <BarChart width={700} height={200} data={data}>
                    <XAxis dataKey="name" tick={99999} />
                    <YAxis />
                    <Bar type="monotone" dataKey="uv" barSize={30} fill="#9900cc"
                        label={'renderCustomBarLabel'} />
                </BarChart>
            </div>
        )
    }

}




export default SalesCountry;