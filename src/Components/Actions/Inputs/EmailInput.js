import React, { Component } from 'react';
import { inject } from 'mobx-react';

import './Input.css'

@inject('ClientStore')
class Input extends Component {

    getEmail = e => {
        console.log(e.target.name)
        this.props.getClientName(e.target.getAttribute('name'))
        this.props.clientDisplay()
    }

    render() {
    const emails = ['A', 'B', 'C', 'D'].map((e, i) => <div className='name' key={i} name={e} onClick={this.getEmail}>{e}</div>)
    console.log(emails)
        return (
            <div className='email input'>

               <div >{emails} </div>

            </div>
        )
    }
}

export default Input;