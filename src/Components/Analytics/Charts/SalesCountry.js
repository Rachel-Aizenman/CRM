import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis  } from 'recharts';


class SalesCountry extends Component {

    render() {
        const data = this.props.data
        return (
            <div className='graph sales-country'>
                <h4>Sales By Country</h4>
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