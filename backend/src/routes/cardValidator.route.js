const { Router } = require('express')
const cardValidatorCtrl = require('../controllers/cardValidator.controller')
const route = Router()

route.get('/', cardValidatorCtrl.obtain)
route.post('/', cardValidatorCtrl.create)

module.exports = route