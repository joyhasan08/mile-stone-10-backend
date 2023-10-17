const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


const users = [
    { id: 1, name: 'joy', email: 'joyhasan235@gmail.com' },
    { id: 2, name: 'koy', email: 'koyhasan235@gmail.com' },
    { id: 3, name: 'coy', email: 'Noyhasan235@gmail.com' }
]

// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello world from server side 😁')
})
app.get('/page', (req, res) => {
    res.send('page 1 data coming sooon 😁')
})
app.get('/user', (req, res) => { res.send(users) })

app.post('/user', (req, res) => {
    console.log('post')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push = newUser;
    res.send(newUser)
})


app.listen(port, () => console.log(`server running on port ${port}`)); 