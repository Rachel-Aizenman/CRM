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
        if (action === 'transfer') {
            client.owner = value
        }
        if (action === 'send') {
            client.emailType = value
        }
        if (action === 'declare') {
            client.sold = true
        }
    }

    @action getHottestCountry = () => {
        const countryList = [...new Set(this.clients.map(c => c.country))]
        const group = countryList.map(c => this.clients.filter(j => j.country === c))
        const salesWithName = group.map(g => g.filter(c => c.sold === true).length + '-' + g[0].country)
        const sales = group.map(g => g.filter(c => c.sold === true).length).sort()
        const hottestCountry = salesWithName.find(n => n.split('').splice(0, 3).join('') == sales[0])
        return hottestCountry
    }



    @action getTopEmployee = () => {
        const owners = [...new Set(this.clients.map(c => c.owner))]
        const group = owners.map(c => this.clients.filter(j => j.owner === c))
        const ownerString = group.map(g => g.filter(c => c.sold === true).length + '-' + g[0].owner).map(o => o.split('-'))
        const sortedSales = group.map(g => g.filter(c => c.sold === true).length).sort().reverse().splice(0, 3)
        // const emp1 = 

        const topEmployee1 = ownerString.filter(o => o[0] == sortedSales[0])[0]
        const topEmployee2 = ownerString.filter(o => o[0] == sortedSales[1])[0]
        const topEmployee3 = ownerString.filter(o => o[0] == sortedSales[2])[0]

        const topEmployees = [{ 'name': topEmployee1[1], 'uv': topEmployee1[0] }, { 'name': topEmployee2[1], 'uv': topEmployee2[0] }, { 'name': topEmployee3[1], 'uv': topEmployee3[0] }]
        return topEmployees
    }

    @action getSalesByCountry = () => {
        const countryList = [...new Set(this.clients.map(c => c.country))]
        const group = countryList.map(c => this.clients.filter(j => j.country === c))
        const countryInfo = group.map(g => g.filter(c => c.sold === true).length + '-' + g[0].country)

        const countries = []
        for (let i = 0; i < countryInfo.length; i++) {
            countries.push({ 'name': countryInfo[i].split('-')[1], 'uv': countryInfo[i].split('-')[0] })
        }
        return countries
    }

    @action getThreeMonthsAgo = () => {
        const monthNames = ["November", "December", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October"];
        const d = new Date();
        const threeMonthsAgo = monthNames[d.getMonth()]
        const day = d.getDate()

        return [threeMonthsAgo, day]

    }

    @action getSalesBy = () => {
        const monthNames = ["November", "December", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October"];

       let startDate =  this.getThreeMonthsAgo()
       let date = startDate[1]
       let month = startDate[0]
       let monthIndex = monthNames.findIndex(m => month === m)

       const dateArray = []
       for(let i = 0; i < 12; i++){
        if(date >= 29){
            date = 1
            monthIndex++
        } else {
            date = date + 5
        }
        let newMonth = monthNames[monthIndex]
        
        dateArray.push(newMonth.slice(0, 3) + '-' +  date)

       }
       
       const dates = []
       for (let i = 0; i < dateArray.length; i++) {
        dates.push({ 'name': dateArray[i].split(0, 3)[0], 'uv': 32})
    }
    console.log(dateArray)
    const abvMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    const indxMonths = [ 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12]
    const formattedDate = dateArray.map(d => d.split('-')[0]).findIndex(d => d === abvMonths)
   
    console.log(formattedDate)
    const bro = this.clients.map((c) => c.firstContact.split('').splice(5, 5).join(''))

    console.log(bro)



    return dates



    }

    @action getDate = () => {
        const date = this.clients.map(c => c.firstContact.split('').splice(0, 10).join(''))
        const year = date.map(d => d.split('').splice(0, 4).join(''))
        const month = date.map(d => d.split('').splice(5, 2).join(''))
        const day = date.map(d => d.split('').splice(8, 2).join(''))
        const formattedDate = month.map((m, i) => m + '-' + day[i] + '-' + year[i])
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
        const date = '0' + month + '-' + year
        const dates = this.getDate()
        const clientDate = dates.map(d => d.split('').splice(0, 2).join('') + d.split('').splice(5).join(''))
        const newClientNumb = clientDate.filter(d => d === date).length
        return newClientNumb
    }

    @action getNewClientsinfo = () => {
        //  console.log(new Date())
        //  this.clients.filter(c => c.firstContact[3] ==c.firstContact[4] === )
        return this.clients.map(c => c.firstContact.split(''))
    }

    @action addClient = (client) => {
        const date = moment().format();
        console.log(date)
        // console.log(this.clients[72].firstContact)
        const newClient = {
            _id: null,
            name: client.firstName + ' ' + client.surname,
            email: null,
            firstContact: date,
            emailType: null,
            sold: null,
            owner: client.owner,
            country: client.country
        }
        this.clients.splice(0, 0, newClient)
        console.log(this.clients)
    }

}

export default ClientStore;