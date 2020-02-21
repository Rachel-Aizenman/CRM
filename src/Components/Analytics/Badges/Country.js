import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';

import '../Analytics.css'


class Country extends Component {

    render() {
        return (
            <div className='badge-component'>
                <div className='badge country'>
                    <Icon className="fas fa-globe-americas icon" style={{
                        color: 'white', fontSize: 60
                    }} />
                </div>
                <div className='badge-info'>
                <div className='number'>{this.props.country}</div>
                    Hottest Country                </div>
            </div>
        )
    }

}




export default Country;