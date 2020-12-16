const { urlencoded } = require('express')

const express = require ('express')
const session = require ('express-session')
const app = express()

let sessionOptions = session({
secret: "JavaScript OMG",
resave: false,
saveUninitialized: false,
cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

app.use(sessionOptions)

const router = require('./router')

app.use(urlencoded({extended: false}))
app.use (express.json())

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app 
