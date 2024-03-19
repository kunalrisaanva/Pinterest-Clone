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
    const user = await User.findOne({username:req.user?.username}).populate("posts")
    res.render("profile",{user,nav:true})
}) 

const renderAddPage = asyncHandler( async(req,res) => {
    const user = await User.findOne({username:req.user?.username});
    res.render("add",{user,nav:true})
}) 


const renderShowPage = asyncHandler( async(req,res) => {
    const user = await User.findOne({username:req.user?.username}).populate("posts")
    res.render("allPosts",{user,nav:true})
}) 


const renderFeedPage = asyncHandler( async(req,res) => {
    const user = await User.findOne({username:req.user?.username});
    const posts = await Post.find().populate("user")
    // console.log(posts)
    // send data both {user,posts}
    res.render("feed",{user,posts,nav:true})
}) 
 


export {
    renderHomePage,
    renderRegisterPage,
    renderProfilePage,
    renderAddPage,
    renderShowPage,
    renderFeedPage
}
