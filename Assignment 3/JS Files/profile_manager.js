import User from "./userStruct";
import asyncHandler from "express-async-handler";

const updateUser = asyncHandler(async(req,res) =>{

const user = await User.findById(req.user.username);
if (user){
    user.name = req.body.name || user.name;
    user.address1 = req.body.address1 || user.address1;
    user.address2 = req.body.address2 || user.address2;
    user.city = req.body.city || user.city;
    user.statecode = req.body.statecode || user.statecode;
    user.zipcode = req.body.zipcode || user.zipcode

    const updatedUser = await user.save();
    res.json({
        name: updateUser.name,
        address1: updatedUser.address1,
        address2: updatedUser.address2,
        city:updatedUser.city,
        statecode: updatedUser.statecode,
        zipcode: updatedUser.zipcode

     





    })
}


})
//username
//address1
//address2
//city
//statecode
//zipcode


















