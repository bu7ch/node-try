const express = require('express')
const greetingRouter = express.Router();

greetingRouter.get('/', (req,res) =>{
res.send('Coucou')
})
greetingRouter.post('/new', (req, res)=>{
  res.send('message: Travail terminé')
})
greetingRouter.put('/edit', (req, res)=>{
  res.send('message: Travail modifié')
})

module.exports = greetingRouter;