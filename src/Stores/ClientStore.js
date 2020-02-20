import { observable, action, computed } from 'mobx'
let data = require('../data.json')
const moment = require('moment')


export class ClientStore {
    @observable clients = [];

    @action getClients = () => {
        data.forEach(d => this.clients.push(d))
    }

    @action updateClient = (surname, updatedClient) => {
        const client = this.clients.find(c => c.name.split(" ")[1] === surname)
        client.name = updatedClient.name + ' ' + updatedClient.surname
        client.country = updatedClient.country
    }

    @action updateClientAction = (id, action, value) => {
        const client = this.clients.find(c => c._id === id)
        if (action === 'transfer'){
           client.owner = value
        } 
        if(action === 'send'){
            client.emailType = value
        }
        if(action === 'declare'){
            client.sold = true
        }
    }

    @action getHottestCountry = () => {
        const countryList = [...new Set(this.clients.map(c => c.country))]
        const group = countryList.map(c =>  this.clients.filter(j => j.country === c))
        const salesWithName = group.map(g => g.filter(c => c.sold === true).length + '-' + g[0].country)
        const sales = group.map(g => g.filter(c => c.sold === true).length).sort()
        const hottestCountry = salesWithName.find(n => n.split('').splice(0, 3).join('') == sales[0])
        return hottestCountry
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
            const currentDate = monthNames[d.getMonth()] 

        return currentDate
    }

    @action calculateNewClients = () => {
        const d = new Date();
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        const date = '0' +  month + '-' + year
        const dates = this.getDate()       
        const clientDate = dates.map(d => d.split('').splice(0,2).join('') + d.split('').splice(5).join(''))     
        const newClientNumb = clientDate.filter(d => d === date).length
        return newClientNumb
    }

    @action getNewClientsinfo = () => {
        //  console.log(new Date())
        //  this.clients.filter(c => c.firstContact[3] ==c.firstContact[4] === )
        return this.clients.map(c => c.firstContact.split(''))
    }

    @action addClient  = (client) => {
        const date = moment().format();
        console.log(date)
        // console.log(this.clients[72].firstContact)
        const newClient = {
            _id: null,
            name: client.firstName + ' ' + client.surname,
            email: null,
            firstContact: date,
            emailType: null,
            sold:  null,
            owner: client.owner,
            country: client.country
        }
        this.clients.splice(0, 0, newClient)
        console.log(this.clients)
    }

}

export default ClientStore;