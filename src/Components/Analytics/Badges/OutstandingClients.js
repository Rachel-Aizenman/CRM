import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';


class OutstandingClient extends Component {

    render() {
        return (
            <div className='badge-component'>
            <div className='badge outstanding-client'>
            <Icon className="
            fas fa-user-circle icon" style={{ color: 'white', fontSize: 60
 }} />
            </div>
            <div className='badge-info'>
<div className='number'>{this.props.outstandingClients}</div>
                    Outstanding Clients
                </div>
            </div>
        )
    }

}




export default OutstandingClient;