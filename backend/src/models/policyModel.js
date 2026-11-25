import mongoose from "mongoose";


const policySchema = new mongoose.Schema({
    introduction:{
        type:String,
        required:true 
    },
    policy1:{
        type:String,
        required:true 
    },
    policy2:{
        type:String,
        required:true 
    },
    policy3:{
        type:String,
        required:true 
    },
    policy4:{
        type:String,
        required:true 
    },
    policy5:{
        type:String,
        required:true 
    },
    policy6:{
        type:String,
        required:true 
    },
},{timestamps:true});

export const Policy = mongoose.models.Policy || mongoose.model('Policy', policySchema);