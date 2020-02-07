import React, { Component } from 'react';
import Country from './Country'
import Emails from './Emails'
import NewClient from './NewClients'
import OutstandingClient from './OutstandingClients'
import { inject } from 'mobx-react';

@inject('ClientStore')
class Badges extends Component {

    componentDidMount = () => {
        const data = this.props.ClientStore.client
    }



    render() {
        const month = this.props.ClientStore.getCurrentMonth()
        const newClientInfo = this.props.ClientStore.getNewClientsinfo()
        console.log(this.props.ClientStore.getNewClientsinfo())
        return (
            <div className='sub-component'>
                <NewClient month={month}/>
                <Emails/>
                <OutstandingClient/>
                <Country/>
                
            </div>
        )
    }

}




export default Badges;