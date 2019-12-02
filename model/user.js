const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
      "name": String,
      "username": String,
      "email": String,
      "address": {
        "street": String,
        "suite": String,
        "city": String,
        "zipcode": Number,
        "geo": {
          "lat": Number,
          "lng": Number 
        }
      },
      "phone": Number,
      "website": String,
      "company": {
        "name": String,
        "catchPhrase": String,
        "bs": String,
      }
})

const User = mongoose.model('User', userSchema)

module.exports = User;