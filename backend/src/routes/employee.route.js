const { Router } = require('express')
const route = Router()
const employeeCtrl = require('../controllers/employee.controller')

route.get('/', employeeCtrl.getEmployees)
route.get('/employee', employeeCtrl.getEmployee)
route.post('/', employeeCtrl.createEmployee)
route.put('/', employeeCtrl.updateEmployee)
route.delete('/', employeeCtrl.deleteEmployee)

module.exports = route