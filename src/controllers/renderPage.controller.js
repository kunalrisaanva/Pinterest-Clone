import { asyncHandler } from "../utils/asynchHandler.js";


const renderHomePage = asyncHandler( async(req,res) => {
    res.render("index")
}) 


const renderRegisterPage = asyncHandler( async(req,res) => {
    res.send("hello world")
}) 



export {
    renderHomePage,
    renderRegisterPage
}
