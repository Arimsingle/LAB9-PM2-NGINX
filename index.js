var express = require('express');
var app = express();
app.get('/', (req, res) => res.send('Hello world lab9'));
app.get('/crash',(req,res)=>{
    res.send('CRASH')
    process.exit(1)
})
app.listen(process.env.PORT, () => console.log("Server Running Port: ",process.env.PORT));