const express = require('express')
const userRouter = express.Router()
const User = require('../model/user')
userRouter.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if(err) console.error(err)
    res.render('users', {users:users})
  })
})

userRouter.post('/new', (req, res) => {
  const newUser = new User(req.body)
  
  newUser.save((err, newUser) => {
    if (err) console.error(err)
    res.send({msg: `User added`, newUser})
  })
})

userRouter.put('/edit/:id', (req, res)=> {
  User.findById({_id:req.params.id}, (err, userOld)=> {
    if (err) console.error(err)
    Object.assign(userOld, req.body).save((err, userUpdate)=> {
      if(err) console.error(err)
      res.json({msg: 'User is Update', userUpdate})
    })
  })
})

module.exports = userRouter;