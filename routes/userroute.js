module.exports = (app) => {
const users = [
    new User('super','1-1-1990','29','super@ass.com','super','false'),
    new User('groupassist','1-1-1990','29','groupassist@ass.com','super','false'),
    new User('groupadmin','1-1-1990','29','groupadmin@ass.com','super','false'),
    new User('user1','1-1-1990','29','user1@ass.com','super','false'),
    new User('user2','1-1-1990','29','user2@ass.com','super','false'),
    new User('user3','1-1-1990','29','user3@ass.com','super','false'),
    new User('user4','1-1-1990','29','user4@ass.com','super','false'),
];

app.get('/api/user',(req,res) => {
    res.send(users);
});
}



// require('./routes/api/chanmels')(app);
// require('./routes/api/groups')(app);


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