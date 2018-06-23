
const contactModel = require('../models/contact');
const Api = {};


Api.insertContact = (req, res) => {
  changeToModelName.getImages()
    .then(data => {
      console.log(data)
      res.send({
        data
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err})
    })
}

module.exports = Api;