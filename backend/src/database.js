const mongoose = require('mongoose')

URI = ('mongodb://localhost/triarioTest')

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log('MongoDB is connected'))
    .catch(error => console.log(error))

module.exports = mongoose