import { observable, action, computed } from 'mobx'
let data = require('../data.json')


export class ClientStore {
    @observable clients = [];

    @action getClients = () => {
        data.forEach(d => this.clients.push(d))
    }

    @action updateClient = (surname, updatedClient) => {
        const client = this.clients.find(c => c.name.split(" ")[1] === surname)
        client.name = updatedClient.name + ' ' + updatedClient.surname
        client.country = updatedClient.country
        console.log(client)

    }

    @action getDate = () => {
        const date = this.clients.map(c => c.firstContact.split('').splice(0, 10).join(''))
        const year = date.map( d => d.split('').splice(0, 4).join(''))
        const month = date.map( d => d.split('').splice(5, 2).join(''))
        const day = date.map( d => d.split('').splice(8, 2).join(''))
        const formattedDate = month.map((m, i) => m + '-' + day[i]  + '-' + year[i])
        return formattedDate
    }

    @action getCurrentMonth = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const d = new Date();
        return monthNames[d.getMonth()]
    }

    @action getNewClientsinfo = () => {
         console.log(new Date())
        //  this.clients.filter(c => c.firstContact[3] ==c.firstContact[4] === )
        return this.clients.map(c => c.firstContact.split(''))
    }

}

export default ClientStore;