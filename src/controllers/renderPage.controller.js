import { asyncHandler } from "../utils/asynchHandler.js";


const renderHomePage = asyncHandler( async(req,res) => {
    res.render("index")
}) 


const renderRegisterPage = asyncHandler( async(req,res) => {
    res.render("register")
}) 


const renderProfilePage = asyncHandler( async(req,res) => {
    // const user = await User.findOne({username:req.session.passport.user});
    res.render("profile")
}) 



export {
    renderHomePage,
    renderRegisterPage,
    renderProfilePage
}
