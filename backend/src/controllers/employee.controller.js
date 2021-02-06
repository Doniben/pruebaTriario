const employeeCtrl = {}

employeeCtrl.getEmployees = (req, res) => {
    res.send('Getting all the employees')
}

employeeCtrl.getEmployee = (req, res) => {
    res.send('Getting just one employee')
}

employeeCtrl.createEmployee = (req, res) => {
    res.send('Creatting new employee')
}

employeeCtrl.updateEmployee = (req, res) => {
    res.send('Update employee')
}

employeeCtrl.deleteEmployee = (req, res) => {
    res.send('Delete Employee')
}

module.exports = employeeCtrl