import React, { Component } from 'react';
import Update from './Update'
import AddClient from './AddClient'
import { inject } from 'mobx-react';
import './Actions.css'

@inject('ClientStore')
class Actions extends Component {

    render() {
        return (
            <div>
               <Update clients={this.props.ClientStore.clients}/>
               <div className='line'></div>
               <AddClient/>
            </div>
        )
    }

}




export default Actions;