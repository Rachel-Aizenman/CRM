import React, { Component } from 'react';
import { inject } from 'mobx-react';

import './Input.css'

@inject('ClientStore')
class Input extends Component {

    getClientName = e => {
        console.log(e.target.getAttribute('data'))
        this.props.getClientId(e.target.getAttribute('data'))
        this.props.getClientName(e.target.getAttribute('name'))
        this.props.clientDisplay()
    }

    render() {
    const clients = this.props.ClientStore.clients.map((c, i) => <div className='name' key={i} data={c._id} name={c.name} onClick={this.getClientName}>{c.name}</div>)
        return (
            <div className='input'>

               <div >{clients} </div>

            </div>
        )
    }
}

export default Input;