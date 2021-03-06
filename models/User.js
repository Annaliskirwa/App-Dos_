const usersCollection = require ('../db').collection("users")
const validator = require("validator")
const bcrypt = require ("bcryptjs")

let User = function(data){
this.data = data
this.errors = []
}

User.prototype.cleanUp = function(){
    if (typeof(this.data.username) != "string") {this.data.username = ""}
    if (typeof(this.data.email) != "string") {this.data.email = ""}
    if (typeof(this.data.password) != "string") {this.data.password = ""}

    //get rid of any bogus properties
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
}

User.prototype.validate = function(){
    if (this.data.username == "") {this.errors.push("You must provide a username")}
    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username should only contain letters and numbers")}
    if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email")}
    if (this.data.password == "") {this.errors.push("You must provide a valid password")}
    if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("Please enter a password that is more than 12 characters")}
    if (this.data.password.length > 50){this.errors.push("Password cannot be more than 50 characters")}
    if (this.data.username.length > 0 && this.data.password.length < 3) {this.errors.push("Please enter a username that is more than 3 characters")}
    if (this.data.username.length > 30){this.errors.push("username cannot be more than 30 characters")}
}

User.prototype.login = function (){
    return new Promise((resolve, reject) => {
        this.cleanUp()
        usersCollection.findOne({username: this.data.username}).then((attemptedUser) => {
            if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)){
                resolve("Congrats")
                       } else {
                reject("Invalid username/ password")
                       }
        }).catch(function(){
            reject("Please try again later")
        })
    })
}

User.prototype.register = function(){
    // Step One: Validate user validation errors
    this.cleanUp()
    this.validate()
    //Step Two: Only if there are no validation errors
    //then save user data  to database
    if (!this.errors.length){
        //hash user passwords
        let salt = bcrypt.genSaltSync(10)
        this.data.password = bcrypt.hashSync(this.data.password, salt)
        usersCollection.insertOne(this.data)
    }
}

module.exports = User