class User {
    constructor(
        username,
        BirthDate,
        Age,
        Email,
        Password,
        Vaild
    ){
        this.username = username;
        this.BirthDate = BirthDate;
        this.Age = Age;
        this.Email = Email;
        this.Password = Password;
        this.Vaild = Vaild;
    }
}

module.exports = {
    User,
};