const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello world from server side 😁')
})
app.get('/page', (req, res) => {
    res.send('page 1 data coming sooon 😁')
})

app.get('/page/1e', (req, res) => res.send(`data for page 1e`))


app.listen(port, () => console.log(`server running on port ${port}`)); 