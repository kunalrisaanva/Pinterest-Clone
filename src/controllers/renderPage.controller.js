import { asyncHandler } from "../utils/asynchHandler.js";
import { User } from "../models/user.model.js";
import { Post } from "../models/post.model.js";

const renderHomePage = asyncHandler( async(req,res) => {
    res.render("index",{nav:false})
}) 


const renderRegisterPage = asyncHandler( async(req,res) => {
    res.render("register",{nav:false})
}) 


const renderProfilePage = asyncHandler( async(req,res) => {
    // const user = await User.findOne({username:req.session.passport.user}).populate("posts")
    res.render("profile",{nav:true})
}) 

const renderAddPage = asyncHandler( async(req,res) => {
    // const user = await User.findOne({username:req.session.passport.user});
    res.render("add",{nav:true})
}) 


const renderShowPage = asyncHandler( async(req,res) => {
    // const user = await User.findOne({username:req.session.passport.user});
    res.render("allPosts",{nav:true})
}) 


const renderFeedPage = asyncHandler( async(req,res) => {
    // const user = await User.findOne({username:req.session.passport.user})
    // const posts = await Post.find().populate("users")
    // send data both {user,posts}
    res.render("feed",{nav:true})
}) 
 


export {
    renderHomePage,
    renderRegisterPage,
    renderProfilePage,
    renderAddPage,
    renderShowPage,
    renderFeedPage
}
