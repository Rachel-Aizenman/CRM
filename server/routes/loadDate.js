  
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/CRM')
const data = require('./data.json');

const addClient = async function (client) {
    let name = client.name.split(' ')
    let firstName = name[0]
    let lastName = name[1]
    let query = `INSERT INTO client 
        VALUES (null, '${firstName}', '${lastName}', '${client.email}', '${client.firstContact}', '${client.emailType}', ${client.sold}, '${client.owner}', '${client.country}')`
    let result = await sequelize.query(query)
    return result[0]
}

for (let item of data) {
    addClient(item)
}