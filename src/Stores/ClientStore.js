import { observable, action, computed } from 'mobx'
let data = require('../data.json')
const moment = require('moment')


export class ClientStore {
    @observable clients = [];

    @action getClients = async () => {
        let response = await axios.get('http://localhost:4000/clients')
        // response.data[0] ? this.clients = [...response.data[0]] : console.log('error')
        return response[0]
    }

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

        let startDate = this.getThreeMonthsAgo()
        let date = startDate[1]
        let month = startDate[0]
        let monthIndex = monthNames.findIndex(m => month === m)

        const dateArray = []
        for (let i = 0; i < 12; i++) {
            if (date >= 29) {
                date = 1
                monthIndex++
            } else {
                date = date + 5
            }
            let newMonth = monthNames[monthIndex]

            dateArray.push(newMonth.slice(0, 3) + '-' + date)

        }
        let totals = []
        const objs = []
        for (let i = 0; i < dateArray.length; i++) {
            if(dateArray[i].split('-')[1].split('').length == 1){
                dateArray.map(d => 0 + d.split('-')[1])
                objs.push({ 'name': dateArray[i].split('').splice(0, 4).join('') + 0 + dateArray[i].split('').splice(4).join('') , 'uv': null })
            } else {
            objs.push({ 'name': dateArray[i].split(0, 3)[0], 'uv': null })}
        }


        const abvMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const indxMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

        let formattedDate = []
        for(let i = 0; i < objs.length; i++){
            let indx = abvMonths.findIndex(a => a === objs[i].name.split('').splice(0, 3).join(''))
            formattedDate = objs.map(o => indxMonths[indx]+ o.name.split('').splice(3).join(''))
        }

        
        for(let i = 0; i < formattedDate.length; i++){
        const formatted = this.clients.filter(c => c.firstContact.split('').splice(5, 5).join('') == formattedDate[i])
        const salesBy = formatted.filter(c => c.sold === true)
        const total = salesBy.length * 4
            totals.push(total)
        }

        for (let i = 0; i < dateArray.length; i++) {
            if(dateArray[i].split('-')[1].split('').length == 1){
                dateArray.map(d => 0 + d.split('-')[1])
                objs.push({ 'name': dateArray[i].split('').splice(0, 4).join('') + 0 + dateArray[i].split('').splice(4).join('') , 'uv': totals[i] })
            } else {
            objs.push({ 'name': dateArray[i].split(0, 3)[0], 'uv': totals[i] })}
        }


        const formatted = this.clients.filter(c => c.firstContact.split('').splice(5, 5).join('') == formattedDate)
        const salesBy = formatted.filter(c => c.sold === true)
        const total = salesBy.length

     const data = objs.splice(12, 12)
        console.log(objs.splice(12, 12))
        return data



    }

    @action getClientAcquisition = () => {
        const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        const d = new Date()
        let lastMonth = months[d.getMonth() - 1]
        const lastMonthDate = '2018-' + lastMonth
        const lastMonthsClients = this.clients.filter(c => c.firstContact.split('').splice(0, 7).join('') == lastMonthDate)
        const lastMonthSales = lastMonthsClients.filter(c => c.sold === true)
        const lastMonthValue = lastMonthSales.length


        let n = 6;
        let last6monthsTotal = 0
        while (n > 0) {
            const last6Months = months[d.getMonth() + n]
            const last6Date = '2018-' + last6Months
            const last6Clients = this.clients.filter(c => c.firstContact.split('').splice(0, 7).join('') == last6Date)
            const last6Sales = last6Clients.filter(c => c.sold === true)
            const last6Value = last6Sales.length
            last6monthsTotal += last6Value
            n--;
          }

          let k = 12;
          let last12monthsTotal = 0
          while (k > 0) {
              const last12Months = months[d.getMonth() + k]
              const last12Date = '2017-' + last12Months
              const last12Clients = this.clients.filter(c => c.firstContact.split('').splice(0, 7).join('') == last12Date)
              const last12Sales = last12Clients.filter(c => c.sold === true)
              const last12Value = last12Sales.length
              last12monthsTotal += last12Value

              k--;

            }




        const data = [{ 'name': 'Last Month', 'value': lastMonthValue }, { 'name': '6-12 Months', 'value': last6monthsTotal }, { 'name': '12 Months', 'value': last12monthsTotal }]

        return data
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