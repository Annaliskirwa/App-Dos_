const { render } = require('../app')
const User = require('../models/User')

exports.login = function(req, res){
let user = new User(req.body)
user.login().then(function(result){
  req.session.user = {favColor: "blue", username: user.data.username}
  res.send(result)
}).catch(function(e){
  res.send(e)
})
}

exports.logout = function(req, res){
  req.session.destroy()
  res.send("You are now logged out")
    
}

exports.register = function(req, res){
  let user = new User(req.body)
  user.register()
  if(user.errors.length){
res.send(user.errors)
  }
  else{
res.send("Congrats, there are no errors")
  }
}

exports.home = function(req, res){
  if (req.session.user) {
res.render('home-dashboard', {username: req.session.user.username})
  } else {
    res.render('home-guest')
  }
}