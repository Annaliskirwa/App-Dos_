let User = function(data){
this.data = data
this.errors = []
}

User.prototype.validate = function(){
    if (this.data.username == "") {this.errors.push("You must provide a username")}
    if (this.data.email == "") {this.errors.push("You must provide a valid email")}
    if (this.data.password == "") {this.errors.push("You must provide a valid password")}
}

User.prototype.register = function(){
    // Step One: Validate user validation errors
    this.validate()
    //Step Two: Only if there are no validation errors
    //then save user data  to database
}

module.exports = User