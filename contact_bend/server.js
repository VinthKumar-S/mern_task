const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser.json());
/*
app.get('/message',(req,res)=>{
    res.json({message:"Hello From Node.js"})
})*/

mongoose.connect('mongodb://localhost:27017/contactDb',{useNewUrlParse:true,useUnifiedTopology:true})
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const contactListSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
});

const contactList = mongoose.model('contactList',contactListSchema);

app.post('/add-contact',async(req,res)=>{
    const {name,phone,email} = req.body;

    try{
        const newContact = new contactList({name,phone,email});
        await newContact.save();
        res.status(201).json({message:'Item added successfully',newContact});
    }
    catch(err){
        res.status(500).json({message:'Error in adding item',err});
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server running on port`);
})