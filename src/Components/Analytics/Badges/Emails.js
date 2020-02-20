import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';


class Emails extends Component {

    render() {
        return (
            <div className='badge-component'>
            <div className='badge emails'>
            <Icon className="f
            fas fa-envelope icon" style={{
                        color: 'white', fontSize: 60
                    }} />

            </div>
            <div className='badge-info'>
                <div className='number'>{this.props.emailsSent}</div>
                    Emails Sent
                </div>
            </div>
        )
    }

}




export default Emails;