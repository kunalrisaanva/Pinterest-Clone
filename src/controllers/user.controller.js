import { asyncHandler } from "../utils/asynchHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";
import { Post } from "../models/post.model.js";
import passport from "passport";


const registerUser = asyncHandler( async(req,res) => {
    const { username,email,contact,password } = req.body;

    if (
        [username, email, contact, password].some(
            (fields) => fields?.trim() === "" || undefined
        )
    ) {
        throw new ApiError(400, "all fields are required");
    };


    await User.create({
        username,
        email,
        contact,
        password
    })

    console.log("user created successfully ")

})


const fileUpload = asyncHandler(async (req,res) => {

    //todo: save inito cloudinary 

    const user = await User.findOne({username:req.session.passport.user});

    user.profileImage = req.file?.filename

    user.save({validateBeforeSave:false});

    res.redirect("/profile")
})


const createPost  = asyncHandler( async(req,res) => {

    const {title ,descriptions } = req.body
    const user = await User.findOne({username:req.session.passport.user});

    const createdPost = await Post.create({
            user:user._id,
            title,
            descriptions,
            image: ""   // cloudinary url 
        });

    user.posts.push(createPost._id);

    await user.save({validateBeforeSave:false});

    res.redirect("/profile")

})




export {
    registerUser,
    fileUpload
}