const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contacts',contactRoutes);

module.exports = app;

/*
app.get('/message',(req,res)=>{
    res.json({message:"Hello From Node.js"})
})*/

mongoose.connect('mongodb://localhost:27017/contactDb',)
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

app.get('/contacts',async(req,res) =>{
    try{
        const contacts =await contactList.find();
        res.json(contacts);
    }
    catch(e){
        res.status(500).json({message: "Error in Fetching"});
    }
})

app.delete('/contacts/:id',async(req,res) =>{
    try{
        const {id} = req.params;
        await contactList.findByIdAndDelete(id);
        res.json({message:'Contact Deleted'});
    }
    catch(error){
        res.status(500).json({message:'Error in deleting'});
    }
})


app.put('/contacts/:id',async(req,res) =>{
    try{
        const {id} = req.params;
        const {name,phone,email} = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message :"Inavalid ID Format"})
        }

        const updatedContact = await contactList.findByIdAndUpdate(id,{name,phone,email},{new:true});


        if(!updatedContact){
            return res.status(404).json({message :'Contact not found'});
        }

        res.json(updatedContact);
    }
    catch(error){
        res.status(500).json({message:'Error in Updating'});
    }
})
    


const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server running on port`);
})

