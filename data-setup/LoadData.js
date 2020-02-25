const Sequelize = require('sequelize')
const sequelize =  new Sequelize('mysql://root:@localhost/CRM')
const data = require('./data.json')

console.log(sequelize)

const loadData = async(client) => {
    console.log('here')
    let query = `INSERT INTO Clients
    VALUES (null, '${client.name}', '${client.email}', '${client.firstContact}', '${client.emailType}', ${client.sold}, '${client.owner}', '${client.country}')`
    let result = await sequelize.query(query)
    return result[0]
}

for (let item of data) {
    loadData(item)
}