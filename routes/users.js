const express = require('express');
const router= express.Router();
const User = require('../models/user')
//getting all
router.get('/', async (req, res)=>{
    try{
    const users = await User.find()
    res.json(user)
    }catch (err){
    res.status(500).json({message: err.message})
    }
})
//getting one
router.get('/user/:id', getUser, (req, res) => { 
    res.json(res.user)
})
//creating one
router.post('/user', async (req, res)=>{  
    const user = new User ({
        user_fullname:req.body.user_fullname,
        email:req.body.email,
        phone_number:req.body.phone_number,
        password:req.body.password
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
    res.status(400).json({message:err.message})
    }
})
//update one
router.patch('/user/:id',getUser,async  (req, res)=>{
    if (req.body.user_fullname !== null){
        res.user.user_fullname = req.body.user_fullname
        }
    if (req.body.email !== null){
        res.user.email = req.body.email
        }
    if (req.body.phone_number !== null){
        res.user.phone_number = req.body.phone_number
        }
    if (req.body.password !== null){
        res.user.password = req.body.password
        }
    try{
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
//deleting one
router.delete('/user/:id',getUser, async (req, res)=>{
    try{
        await res.User.remove();
        res.json({ message:'deleted user'})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

async function getUser(req, res,next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if(User == null) {
            return res.status(404).json({message: 'No user found'})
        }
    }catch (err) {
    return res.status(500).json({message: err.message})
    }
    res.user =  user
    next()
}
module.exports=router