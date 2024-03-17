import { asyncHandler } from "../utils/asynchHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";


const registerUser = asyncHandler( async(req,res) => {
    const { username,email,contact,password } = req.body;

    if (
        [username, email, contact, password].some(
            (fields) => fields?.trim() === "" || undefined
        )
    ) {
        throw new ApiError(400, "all fields are required");
    };





})


const fileUpload = asyncHandler(async (req,res) => {

    //todo: save inito cloudinary 

    const user = await User.findOne({username:req.session.passport.user});

    user.profileImage = req.file?.filename

    user.save({validateBeforeSave:false});

    res.redirect("/profile")
})

export {
    registerUser,
    fileUpload
}