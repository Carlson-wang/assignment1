module.exports = (app) => {
    const groups = [
    new group('group1','group1'),
];

app.get('/api/groups',(req,res) =>{
    res.send(groups);
});

};

class group{
    constructor(
        name,
        description
    ){
        this.name = name;
        this.description = description;
    }
}