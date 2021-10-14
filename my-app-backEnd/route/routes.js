// const express= require('express')
import express, { request } from 'express';
import {getUsers} from '../controller/user_controller.js'
const route=express.Router();
import user from '../model/user_schema.js'
route.get('/',getUsers);
route.get('/read',(req,res)=>{
    user.find({},(err,result)=>{
    if(err){
        res.send(err)
    }
    else{
    res.json(result)
    }
    })
   
   })
route.post('/signUp',(req,res)=>{
const signedUpUser= new user({
    name : req.body.name,
    username:req.body.username,
    email:req.body.email,
    phone:req.body.phone
})
signedUpUser.save()
.then(data=>{
    res.json(data)
})
.catch(error=>{
    console.error;
})
})

// route.put('/:id',async(req,res)=>{
//     const id=request.params.id
//     try{
//         const user=await user.findById(id)
//         res.json(user)
//     }
//     catch(error){
//         res.error({message:error.message})
//     }
   
// })

route.put('/update',(req,res)=>{

    const id=req.body.id
    const username=req.body.username
    const email=req.body.email
    const phone=req.body.phone
    try{
         user.findById(id,(error,userToUpdate)=>{
           userToUpdate.username=username;
           userToUpdate.email=req.body.email
           userToUpdate.phone=req.body.phone
           userToUpdate.save();
        })
    }catch(err){
        console.log(err)
    }
    res.send("Updated")
})

route.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id
    await user.findByIdAndRemove(id).exec()
    res.send("Item Deleted")
})

export default route;