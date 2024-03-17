import { asyncHandler } from "../utils/asynchHandler.js";


const renderHomePage = asyncHandler( async(req,res) => {
    res.render("index")
}) 


const renderRegisterPage = asyncHandler( async(req,res) => {
    res.render("register")
}) 


const renderProfilePage = asyncHandler( async(req,res) => {
    res.render("profile")
}) 



export {
    renderHomePage,
    renderRegisterPage,
    renderProfilePage
}
