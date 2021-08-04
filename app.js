const { urlencoded } = require('express')

const express = require ('express')
const session = require ('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const markdown = require('marked')
const app = express()
const sanitizeHTML = require ('sanitize-html')

let sessionOptions = session({
secret: "JavaScript OMG",
store:new MongoStore({client: require('./db')}),
resave: false,
saveUninitialized: false,
cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

app.use(sessionOptions)
app.use(flash())

app.use(function(req, res, next){
    //make the markdown available in all our ejs templates
    res.locals.filterUserHTML = function (content){
        return sanitizeHTML(markdown(content), {allowedTags: ['p', 'br', 'h1', 'h2' , 'i' , 'strong', 'ol', 'ul', 'strong'],allowedAttributes: {}}),
    
    //make all flash messages available from all templates
    res.locals.errors = req.flash("errors")
    res.locals.success = req.flash("success")
    // make current uer id available on the req object
    if (req.session.user){req.visitorId = req.session.user._id} else {req.visitorId = 0}
    //make user session template available within viewers templates
    res.locals.user = req.session.user
    next()

}})

const router = require('./router')

app.use(urlencoded({extended: false}))
app.use (express.json())

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app 
