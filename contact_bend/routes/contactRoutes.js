const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/add',adminMiddleware,(req,res) =>{
    res.send('Contact added');
});

router.put('/edit/:id',adminMiddleware,(req,res)=>{
    res.send('Contact edired');
});

module.exports = router;