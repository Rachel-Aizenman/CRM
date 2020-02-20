import React, { Component } from 'react';
import { inject } from 'mobx-react';

import './Input.css'

@inject('ClientStore')
class Input extends Component {

    getOwnerName = e => {
        const id = this.props.clientId
        const name = e.target.getAttribute('name')
        this.props.getClientName(name)
        this.props.clientDisplay()
    }

    render() {
        const owners = this.props.ClientStore.clients.map( c => c.owner)
    const ownerList = [...new Set(owners)].map((o, i) => <div name={o} onClick={this.getOwnerName} className='name' key={i}>{o}</div>)

        return (
            <div className='owner input'>

               <div >{ownerList} </div>

            </div>
        )
    }
}

export default Input;