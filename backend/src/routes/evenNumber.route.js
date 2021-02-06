const { Router } = require('express')
const route = Router()
const evenNumberCtrl = require('../controllers/evenNumber.controller')

route.get('/', evenNumberCtrl.evenChecker)

module.exports = route