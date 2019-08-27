const fs = require('fs');

module.exports = (app,path) => {

    const jsonUser = fs.readFileSync(path.resolve(__dirname, '../data/User.json'));
    const users = JSON.parse(jsonUser);

    const initUser = {
        username: '',
        Password: 'password',
        Email: '',
        Vaild: false,
        isActivated: false,
        ofGroupAdmiinRole: false,
        groupList: [],
        adminGroupList: [],
    };

app.get('/api/users',(req,res) => {
    res.send(users);
});

app.post('/api/login/',(req,res) => {
    if (!req.body){
        return res.sendStatus(400);
    }
const username = req.body.username;
const Password = req.body.Password;

//create new user
app.post('/api/user',(req,res) =>{
    if (!req.body){
        return res.status(400).semd('Bad request');
    }

    const username = req.body.username;
    if(!username
    || users.filter(user => user.username === username).length > 0){
        return res.status(400).send({
            sucess: 'false',
            message: 'username is missing or duplicated'
        });
    }
    
    const newUser = {
        ...initUser,
        ...req.body,
    };

    user.push({
        ...newUser,
    });

    fs.writeFileSync(path,resolve(__dirname, '../data/users.json'),JSON.stringify(users));
    res.send(newUser);
});

//retrieve an user by username
app.get('/api/user/:username',(req,res) => {
    const username = req.params.username;
    const user = users.find(user => user.username === username);

    if (!user) return res.status(404).send('Not Found.');

    return res.send(user);
});

//delete user
app.delete('/api/user/:username',(req,res) => {
    const username = req.params.username;
    const user = users.find(user => user.username === username);

    if (!user) return res.status(404).send('Not Found.');

    const index = users.indexOf(user);
    users.splice(index,1);

    fs.writeFileSync(path,resolve(__dirname, '../data/users.json'),JSON.stringify(users));

    return res.send(user);
});





const result = users.find(user => user.username === username && user.Password === Password);

if (!result) return res.status(404).send('cannot login');

result.Vaild = ture;
res.send(result);
})
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

