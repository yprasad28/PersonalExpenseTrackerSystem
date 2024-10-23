const asyncHandler = require("express-async-handler");
const transectionModel = require("../models/transectionModel.js");


const getAllTransection = asyncHandler(async(req, res) => {
     const transections = await  transectionModel.find({user_id: req.user.id});
     res.status(200).json(transections)
});



const addTransection = asyncHandler (async(req, res) => {
    console.log("the request body is:", req.body);
    const {amount, type,category,description,date} = req.body;
    if(!amount || !type || !category || !description || !date){
        res.status(400);
        throw new Error("All fields are required")
    }

    const newTransection = await transectionModel.create({
        amount,
        type,
        category,
        description,
        date,
        user_id: req.user.id
    });
    res.status(200).json(newTransection)
});


const getTransection = asyncHandler(async(req, res) => {
    const transection = await  transectionModel.findById(req.params.id);
    if(!transection){
        res.status(404);
        throw new Error("transection not found");
    }

    res.status(200).json(transection);
});




const editTransection = asyncHandler(async(req, res) => {
    const transection = await  transectionModel.findById(req.params.id);
    if(!transection){
        res.status(404);
        throw new Error("transection not found");
    }
    if (transection.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update other user transection");
    }

    const editedTransection = await transectionModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(editedTransection)
});


const deleteTransection = asyncHandler(async(req, res) => {
    const transections = await  transectionModel.findById(req.params.id);
    if(!transections){
        res.status(404);
        throw new Error("transection not found");
    }
    if(transections.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to update other user transection");
    }

    await transectionModel.deleteOne({_id:req.params.id});
    res.status(200).json(transection);
});
module.exports = {getAllTransection,
    addTransection,
    getTransection,
    editTransection,
    deleteTransection};