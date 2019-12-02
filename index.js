const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/users_DB', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  `We are connected !! with Love.`
});


const greetingRouter = require('./route/greeting')
const userRouter = require('./route/users')
app.get('/', (req, res) => {
res.send('message : bienvenue sur mon super site')
})


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'pug')
app.use('/greeting', greetingRouter)
app.use('/users', userRouter)

app.listen(port, ()=> {
  `Mon serveur marche bien! sur ce port : ${port}`
});