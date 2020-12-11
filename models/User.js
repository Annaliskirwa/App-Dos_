let User = function(data){
this.data = data
this.errors = []
}

User.prototype.validate = function(){
    if (this.data.username == "") {this.errors.push("You must provide a username")}
    if (this.data.email == "") {this.errors.push("You must provide a valid email")}
    if (this.data.password == "") {this.errors.push("You must provide a valid password")}
    if(this.data.password.length > 0 && this.data.password.length < 12){this.errors.push("Please enter a password that is more than 12 characters")}
    if( ){}
}

User.prototype.register = function(){
    // Step One: Validate user validation errors
    this.validate()
    //Step Two: Only if there are no validation errors
    //then save user data  to database
}

module.exports = User