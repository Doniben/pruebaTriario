const cardValidatorCtrl = {}

cardValidatorCtrl.obtain = (req, res) => {
     res.send('Obtaining number card working (GET)')
}

cardValidatorCtrl.create = (req, res) => {
    res.send('create number card working (POST)')
}
 
module.exports = cardValidatorCtrl