const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.get('/', (req, res) => {
 //
 // 
 // 
 // 
 // 
 //res.json({"id":"10","name":"xyz","age":"25"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/shiv', (req, res) => {
    res.json({"Name":"Shivani","Roll No":"3170", "age": "22","address": "Maharashtra" });

})


app.get('/post data', (req, res) => {
    const(email,name)=req.body;
    console.log(req.body);
    res.send("data received from"+name)
})


app.listen('/post data', (req, res) => {

    const(email,name)=req.body;
    console.log(req.body);
    res.send("data received from"+name)
})