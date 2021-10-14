import { response } from "express";
import {v4 as uuid} from 'uuid';

export const getUsers=(req,res)=>{
    res.status(200).json(" Hello, DB is created successfully !!")
}
// export const addUser=(req,res)=>{
//     response.send("Hello,testing")
// }
