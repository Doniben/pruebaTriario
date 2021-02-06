const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./database')

// Setting Server
app.set('port', 4000)
app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// Start Server

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
})

// Routes

app.use('/api/cardvalidator', require('./routes/cardValidator.route'))
app.use('/api/employees', require('./routes/employee.route'))
app.use('/api/perfect', require('./routes/perfectNumber.route'))
app.use('/api/even', require('./routes/evenNumber.route'))