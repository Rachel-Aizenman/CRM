import React, { Component } from 'react';
import Clients from './ClientsAcquistion'
import Employees from './Employees'
import SalesCountry from './SalesCountry'
import SalesSince from './SalesSince'
import { inject } from 'mobx-react';

class Charts extends Component {

    render() {
        return (
            <div className='sub-component'>
                <div>
                    <Employees data/>
                    <SalesSince />
                </div>
                <div>
                    <SalesCountry />
                    <Clients />
                </div>
            </div>
        )
    }

}




export default Charts;