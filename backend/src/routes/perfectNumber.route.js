const { Router } = require('express')
const route = Router()
const perfectNumberCtrl = require('../controllers/perfectNumber.controller')

route.get('/', perfectNumberCtrl.validateNumber)

module.exports = route