const express = require('express');
const app = express();

// const path = require('path');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// require('./routes/index')(app);
// require('./routes/auth')(app);
app.get('/',(req,res) => {
    return res.send('This is server api root');
});

require('./routes/userroute')(app);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`listening ${port}...`);
});