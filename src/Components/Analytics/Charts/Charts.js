import React, { Component } from 'react';
import Clients from './ClientsAcquistion'
import Employees from './Employees'
import SalesCountry from './SalesCountry'
import SalesSince from './SalesSince'
import { inject } from 'mobx-react';

@inject('ClientStore')
class Charts extends Component {

    render() {
        const clientStore = this.props.ClientStore
        return (
            <div className='sub-component'>
                <div>
                    <Employees data={clientStore.getTopEmployee()} />
                    <SalesSince date={clientStore.getThreeMonthsAgo()} data={clientStore.getSalesBy()}/>
                </div>
                <div>
                    <SalesCountry data={clientStore.getSalesByCountry()} />
                    <Clients />
                </div>
            </div>
        )
    }

}




export default Charts;