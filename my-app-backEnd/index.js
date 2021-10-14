import express from 'express';
// const express= require('express')
import mongoose from 'mongoose';
// const mongoose= require('mongoose')
// const route=require('./route/routes')
import route from './route/routes.js';
import cors from 'cors';
 const app=express();

 app.use(express.json())
 app.use(cors())
 app.use('/users',route)
 const url='mongodb+srv://admin:admin123@cluster0.1fvx5.mongodb.net/CRUD?retryWrites=true&w=majority';

 mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen("8000",function(){
        console.log("Server is running successfully on port 8000")
    })
 }).catch(error=>{
     console.log(error.message);
 })
