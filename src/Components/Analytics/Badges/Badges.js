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
        const clientStore = this.props.ClientStore
        const month = clientStore.getCurrentMonth()
        const emailsSent = clientStore.clients.filter(c => c.emailType !== null).length
        const outstandingClients = clientStore.clients.filter(c => c.sold === false).length
        const hottestCountry = clientStore.getHottestCountry()      
        // const countNewClients = this.props.ClientStore.getNewClientsinfo()
        // console.log(this.props.ClientStore.getNewClientsinfo())
        return (
            <div className='sub-component'>
                <NewClient number={this.props.ClientStore.calculateNewClients()} month={month}/>
                <Emails emailsSent={emailsSent}/>
                <OutstandingClient outstandingClients={outstandingClients}/>
                <Country country = { hottestCountry ?hottestCountry.split('').splice(4).join('') : 'No Country'}/>
                
            </div>
        )
    }

}




export default Badges;