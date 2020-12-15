const validator = require("validator")

let User = function(data){
this.data = data
this.errors = []
}

User.prototype.validate = function(){
    if (this.data.username == "") {this.errors.push("You must provide a username")}
    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username should only contain letters and numbers")}
    if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email")}
    if (this.data.password == "") {this.errors.push("You must provide a valid password")}
    if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("Please enter a password that is more than 12 characters")}
    if (this.data.password.length > 100){this.errors.push("Password cannot be more than 100 characters")}
    if (this.data.username.length > 0 && this.data.password.length < 3) {this.errors.push("Please enter a username that is more than 3 characters")}
    if (this.data.username.length > 30){this.errors.push("username cannot be more than 30 characters")}
}

User.prototype.register = function(){
    // Step One: Validate user validation errors
    this.validate()
    //Step Two: Only if there are no validation errors
    //then save user data  to database
}

module.exports = User