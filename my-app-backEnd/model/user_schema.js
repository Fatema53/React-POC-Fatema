import mongoose from 'mongoose';
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:Number,
    date:{
        type: Date,
        default:Date.now
    }
})

const user = mongoose.model("user",userSchema)

export default user;