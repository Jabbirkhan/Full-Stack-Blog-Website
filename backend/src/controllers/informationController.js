import { Information } from "../models/informationModel.js";

const addInformation = async (req,res) => {
    try {
        const {heading, description, mission, vission, email, phone, officeTiming, officeAddress, poboxAddress} = req.body;
        if(!heading || !description || !mission || !vission || !email || !phone || !officeTiming || !officeAddress || !poboxAddress){
            return res.status(400).json({success:false, message:"All fields are required"});
        }
        const informationExist = await Information.find();
        if(informationExist.length === 1){
            return res.status(400).json({success:false, message:"Information already exist."});
        }
        const newInformation = await Information.create({
            heading,
            description,
            mission,
            vission,
            email,
            phone,
            officeTiming,
            officeAddress,
            poboxAddress,
        });
        if(!newInformation){
            return res.status(400).json({success:false, message:"Information uploading failed!."});
        }
        return res.status(200).json({success:true, message:"Information uploaded successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const allInformation = async (req,res) => {
    try {
        const information = await Information.find();
        if(!information){
            return res.status(400).json({success:false, message:"Information not exist."});
        }
        return res.status(200).json({success:true, information});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const updateInformation = async (req,res) => {
    try {
        const {heading, description, mission, vission, email, phone, officeTiming, officeAddress, poboxAddress} = req.body;
        const { id } = req.params;

        if(!heading || !description || !mission || !vission || !email || !phone || !officeTiming || !officeAddress || !poboxAddress){
            return res.status(400).json({success:false, message:"All fields are required"});
        }
        const information = await Information.findById(id);
        if(!information){
            return res.status(400).json({success:false, message:"Information not exist."});
        }
        if(information) information.heading = heading;
        if(information) information.description = description;
        if(information) information.mission = mission;
        if(information) information.vission = vission;
        if(information) information.email = email;
        if(information) information.phone = phone;
        if(information) information.officeTiming = officeTiming;
        if(information) information.officeAddress = officeAddress;
        if(information) information.poboxAddress = poboxAddress;
        information.save();
        return res.status(200).json({success:true, message:"Information updated successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

export {addInformation, allInformation, updateInformation};