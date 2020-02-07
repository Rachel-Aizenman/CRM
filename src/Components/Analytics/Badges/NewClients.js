import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';



class NewClient extends Component {

    render() {
        return (
            <div className='badge-component'>
                <div className='badge new-client'>
                <Icon className="f
            fas fa-chart-line icon" style={{
                        color: 'white', fontSize: 60
                    }} />
                </div>
                <div className='badge-info'>
                    <div className='number'>14</div>
                    New {this.props.month} Clients
                </div>


            </div>
        )
    }

}




export default NewClient;