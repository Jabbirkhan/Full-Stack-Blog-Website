
import { Policy } from "./../models/policyModel.js";

const addPolicies = async (req,res) => {
    try {
        const {policy1, policy2, policy3, policy4, policy5, policy6, introduction} = req.body;
        if(!policy1 || !policy2 || !policy3 || !policy4 || !policy5 || !policy6 || !introduction){
            return res.status(400).json({success:false, message:"All fields are required"});
        }
        const policies = await Policy.find();
        if(policies.length >=1){
            return res.status(400).json({success:false, message:"Policy already exist"});
        }
        const newPolicies = await Policy.create({
            introduction,
            policy1,
            policy2,
            policy3,
            policy4,
            policy5,
            policy6,
        });
        if(!newPolicies){
            return res.status(400).json({success:false, message:"Policies are not uploaded!"});
        }
        return res.status(200).json({success:true, message:"Policies are uploaded successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const allPolicies = async (req,res) => {
    try {
        const policies = await Policy.find();
        if(!policies){
            return res.status(400).json({success:false, message:"Polices are found!"});
        }
        return res.status(200).json({success:true, policies});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const updatePolicies = async (req,res) => {
    try {
        const {policy1, policy2, policy3, policy4, policy5, policy6, introduction} = req.body;
        const { id } = req.params;

        if(!policy1 || !policy2 || !policy3 || !policy4 || !policy5 || !policy6 || !introduction){
            return res.status(400).json({success:false, message:"All fields are required"});
        }
        const policies = await Policy.findById(id);
        if(!policies){
            return res.status(400).json({success:false, message:"Policies are not found!"});
        }
        if(policies) policies.introduction = introduction;
        if(policies) policies.policy1 = policy1;
        if(policies) policies.policy2 = policy2;
        if(policies) policies.policy3 = policy3;
        if(policies) policies.policy4 = policy4;
        if(policies) policies.policy5 = policy5;
        if(policies) policies.policy6 = policy6;

        await policies.save();
        return res.status(200).json({success:true, message:"Policies are updated successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}


export {addPolicies, allPolicies, updatePolicies}