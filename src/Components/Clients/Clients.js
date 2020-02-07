import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Client from './Client'

@inject('ClientStore')

class Clients extends Component{
    render() {
        return <div>
            <Client clients={this.props.ClientStore.clients}/>
        </div>
    }
}

export default Clients;