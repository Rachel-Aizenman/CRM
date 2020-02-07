import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Badges from './Badges/Badges'
import Charts from './Charts/Charts'
import './Analytics.css'

@inject("ClientStore")
class Analytics extends Component {

    render() {
        return (
            <div className='component'>
               <Badges/>
               <div className='divider'></div>
               <Charts/>
               

            </div>
        )
    }

}




export default Analytics;