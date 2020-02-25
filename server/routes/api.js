const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/crm')

// router.get('/clients', async function (req, res) {
//     let clients = await sequelize.query(`SELECT * FROM client`)
//     res.send(clients)
// })