const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

// Setting Server
app.set('port', 4000)
// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// Start Server

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
})
