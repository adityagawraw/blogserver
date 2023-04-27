const User = require("../models/user")

const createUser = async(req, res)=>{
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        console.log(error)
    }
}
const getAllUsers = async(req, res)=>{
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error)
    }
}
const deleteUserByID= async(req, res)=>{
    try {
        const user = await User.deleteOne({_id:req.params.id});
        res.json(user);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createUser, getAllUsers, deleteUserByID}