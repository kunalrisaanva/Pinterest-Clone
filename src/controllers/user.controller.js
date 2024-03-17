import { asyncHandler } from "../utils/asynchHandler";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";



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



export {
    registerUser
}