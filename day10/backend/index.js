const express = require('express')
const app = express()
app.use(express.json());
const mongoosev = require('mongoose');
const Moviemodel = require ('./Models/Moviemodel')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add movie data', (req,res))=>{
    try{   
        const newdata = new Moviemodel(req,body);
        await newdata.save();
        res.send("Data send sucessfully")
        console.log(req,body)
        res.send("data saved sucessfully")
        ,kkkkkkkk
    }
    catch(err){

    }

}

mongoose.connect("mongodb+srv://shivani:dVzZC4vG%40Nf7swL@cluster0.p2vgm.mongodb.net/").then(()=>{
    console.log("mongodb connection successful");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})